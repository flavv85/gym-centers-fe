import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workout } from 'src/app/GymCentersModal';
import { WorkoutService } from 'src/app/service/workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css'],
})
export class AddWorkoutComponent implements OnInit {
  workout: Workout = {} as Workout;
  showProgressBar = false;
  title = 'Adauga program fitness';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private workoutService: WorkoutService
  ) {}

  ngOnInit(): void {
    if (this.data.idWorkout != null) {
      this.title = 'Editeaza detalii program fitness';
      this.workoutService
        .findWorkoutById(this.data.idWorkout)
        .subscribe((workout) => {
          this.workout = workout;
        });
    }
  }
  addWorkout() {
    this.showProgressBar = true;
    if (this.data.idWorkout != null) {
      this.workoutService
        .editWorkout(this.workout, this.data.idWorkout)
        .subscribe((workout) => {
          this.workout = workout;
          window.location.reload();
        });
    }
    this.workoutService
      .addWorkoutForGym(this.workout, this.data.id)
      .subscribe((workout) => {
        this.workout = workout;
        window.location.reload();
      });
  }
}
