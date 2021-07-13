import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addGym(gym: Gym): Observable<Gym> {
    return this.httpClient.post<Gym>(`${this.url}/addGym`, gym);
  }

  editGym(gym: Gym, id: number): Observable<Gym> {
    return this.httpClient.put<Gym>(`${this.url}/editGym/${id}`, gym);
  }

  deleteGym(id: number): Observable<Gym> {
    return this.httpClient.delete<Gym>(`${this.url}/deleteGym/${id}`);
  }

  findGymById(id: number): Observable<Gym> {
    return this.httpClient.get<Gym>(`${this.url}/findGymById/${id}`);
  }

  findAllGyms(): Observable<Gym[]> {
    return this.httpClient.get<Gym[]>(`${this.url}/findAllGyms`);
  }
}
