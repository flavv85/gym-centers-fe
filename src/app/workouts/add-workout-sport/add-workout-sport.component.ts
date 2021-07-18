import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workout } from 'src/app/GymCentersModal';
import { WorkoutService } from 'src/app/service/workout.service';

@Component({
  selector: 'app-add-workout-sport',
  templateUrl: './add-workout-sport.component.html',
  styleUrls: ['./add-workout-sport.component.css'],
})
export class AddWorkoutSportComponent implements OnInit {
  workouts: Workout[];
  filterWorkouts: Workout[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private workoutService: WorkoutService
  ) {}

  ngOnInit(): void {
    this.workoutService.findAllWorkouts().subscribe((workouts) => {
      this.workouts = workouts;
      console.log(this.workouts);
      this.workoutService
        .findWorkoutsForSport(this.data.id)
        .subscribe((filterWorkouts) => {
          this.filterWorkouts = filterWorkouts;
          this.filterWorkouts.forEach((s) => {
            this.workouts = this.workouts.filter((item) => item.id !== s.id);
          });
        });
    });
  }
  selectedValue(event: any) {
    const idWorkout = event.value;
    this.workoutService
      .addWorkoutForSport(idWorkout, this.data.id)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
