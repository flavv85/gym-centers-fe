import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addWorkoutForGym(workout: Workout, idGym: number): Observable<Workout> {
    return this.httpClient.post<Workout>(
      `${this.url}/addWorkoutForGym/${idGym}`,
      workout
    );
  }

  addWorkoutForSport(idWorkout: number, idSport: number): Observable<Workout> {
    return this.httpClient.post<Workout>(
      `${this.url}/addWorkoutForSport/${idWorkout}/${idSport}`,
      null
    );
  }
  editWorkout(workout: Workout, id: number): Observable<Workout> {
    return this.httpClient.put<Workout>(
      `${this.url}/editWorkout/${id}`,
      workout
    );
  }

  findWorkoutById(id: number): Observable<Workout> {
    return this.httpClient.get<Workout>(`${this.url}/findWorkoutById/${id}`);
  }

  deleteWorkout(id: number): Observable<Workout> {
    return this.httpClient.delete<Workout>(`${this.url}/deleteWorkout/${id}`);
  }

  findAllWorkouts(): Observable<Workout[]> {
    return this.httpClient.get<Workout[]>(`${this.url}/findAllWorkouts`);
  }

  findWorkoutsForGym(idGym: number): Observable<Workout[]> {
    return this.httpClient.get<Workout[]>(
      `${this.url}/findWorkoutsForGym/${idGym}`
    );
  }

  findWorkoutsForSport(idSport: number): Observable<Workout[]> {
    return this.httpClient.get<Workout[]>(
      `${this.url}/findWorkoutsForSport/${idSport}`
    );
  }
}
