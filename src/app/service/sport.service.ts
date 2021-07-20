import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addSportForCustomer(idSport: number, idCustomer: number): Observable<any> {
    return this.httpClient.post<any>(
      `${this.url}/addSportForCustomer/${idSport}/${idCustomer}`,
      null
    );
  }

  addSportForGym(sport: Sport, idGym: number): Observable<Sport> {
    return this.httpClient.post<Sport>(
      `${this.url}/addSportForGym/${idGym}`,
      sport
    );
  }

  editSport(sport: Sport, id: number): Observable<Sport> {
    return this.httpClient.put<Sport>(`${this.url}/editSport/${id}`, sport);
  }

  deleteSport(id: number): Observable<Sport> {
    return this.httpClient.delete<Sport>(`${this.url}/deleteSport/${id}`);
  }

  findSportById(id: number): Observable<Sport> {
    return this.httpClient.get<Sport>(`${this.url}/findSportById/${id}`);
  }

  findSportForGym(id: number): Observable<Sport[]> {
    return this.httpClient.get<Sport[]>(`${this.url}/findSportForGym/${id}`);
  }

  findSportForCustomer(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/findSportForCustomer/${id}`);
  }
}
