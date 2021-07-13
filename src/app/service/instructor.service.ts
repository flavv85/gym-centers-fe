import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  findAllInstructors(): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]>(`${this.url}/findAllInstructors`);
  }

  findInstructorById(id: number): Observable<Instructor> {
    return this.httpClient.get<Instructor>(
      `${this.url}/findInstructorById/${id}`
    );
  }

  findInstructorsForSport(idSport: number): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]>(
      `${this.url}/findInstructorsForSport/${idSport}`
    );
  }

  findInstructorsForGym(idGym: number): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]>(
      `${this.url}/findInstructorsForGym/${idGym}`
    );
  }

  addInstructorForGym(
    instructor: Instructor,
    idGym: number
  ): Observable<Instructor> {
    return this.httpClient.post<Instructor>(
      `${this.url}/addInstructorForGym/${idGym}`,
      instructor
    );
  }

  addInstructorForSport(
    idInstructor: number,
    idSport: number
  ): Observable<Instructor> {
    return this.httpClient.post<Instructor>(
      `${this.url}/addInstructorForSport/${idInstructor}/${idSport}`,
      null
    );
  }

  editInstructor(instructor: Instructor, id: number): Observable<Instructor> {
    return this.httpClient.put<Instructor>(
      `${this.url}/editInstructor/${id}`,
      instructor
    );
  }

  deleteInstructor(id: number): Observable<Instructor> {
    return this.httpClient.delete<Instructor>(
      `${this.url}/deleteInstructor/${id}`
    );
  }
}
