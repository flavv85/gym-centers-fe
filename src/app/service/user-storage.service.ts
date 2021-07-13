import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../GymCentersModal';

const USERNAME_KEY = 'AuthUsername';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/addUser`, user);
  }

  editUser(user: User, id: number): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/editUser/${id}`, user);
  }

  findUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/findUserById/${id}`);
  }

  findUserByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(
      `${this.url}/findUserByUsername/${username}`
    );
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/deleteUser/${id}`);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public signOut() {
    window.sessionStorage.clear();
  }
}
