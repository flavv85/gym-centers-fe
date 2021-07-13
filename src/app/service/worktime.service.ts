import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worktime } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class WorktimeService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addCustomerForWork(idCustomer: number, id: number): Observable<any> {
    return this.httpClient.post<any>(
      `${this.url}/addCustomerForWork/${idCustomer}/${id}`,
      null
    );
  }

  addWorktimeForGym(worktime: Worktime, id: number): Observable<Worktime> {
    return this.httpClient.post<Worktime>(
      `${this.url}/addWorktimeForGym/${id}`,
      worktime
    );
  }

  editWorktime(
    worktime: Worktime,
    id: number,
    idGym: number
  ): Observable<Worktime> {
    return this.httpClient.put<Worktime>(
      `${this.url}/editWorktime/${id}/${idGym}`,
      worktime
    );
  }

  deleteWorktime(id: number): Observable<Worktime> {
    return this.httpClient.delete<Worktime>(`${this.url}/deleteWorktime/${id}`);
  }

  findWorktimeById(id: number): Observable<Worktime> {
    return this.httpClient.get<Worktime>(`${this.url}/findWorktimeById/${id}`);
  }

  findWorktimeForGym(id: number): Observable<Worktime[]> {
    return this.httpClient.get<Worktime[]>(
      `${this.url}/findWorktimeForGym/${id}`
    );
  }

  findCustomerForWorktime(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.url}/findCustomerForWorktime/${id}`
    );
  }
}
