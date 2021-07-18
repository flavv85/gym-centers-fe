import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddCustomerComponent } from 'src/app/customer/add-customer/add-customer.component';
import { DisplayCustomerComponent } from 'src/app/customer/display-customer/display-customer.component';
import {
  Customer,
  Instructor,
  Sport,
  User,
  Workout,
  Worktime,
} from 'src/app/GymCentersModal';
import { AddInstructorSportComponent } from 'src/app/instructors/add-instructor-sport/add-instructor-sport.component';
import { AddInstructorComponent } from 'src/app/instructors/add-instructor/add-instructor.component';
import { InstructorService } from 'src/app/service/instructor.service';
import { SportService } from 'src/app/service/sport.service';
import { UserStorageService } from 'src/app/service/user-storage.service';
import { WorkoutService } from 'src/app/service/workout.service';
import { WorktimeService } from 'src/app/service/worktime.service';
import { AddSportComponent } from 'src/app/sports/add-sport/add-sport.component';
import { DisplaySportComponent } from 'src/app/sports/display-sport/display-sport.component';
import { AddWorkoutSportComponent } from 'src/app/workouts/add-workout-sport/add-workout-sport.component';
import { AddWorkoutComponent } from 'src/app/workouts/add-workout/add-workout.component';
import { AddWorktimeComponent } from '../add-worktime/add-worktime.component';

@Component({
  selector: 'app-find-all-worktimes',
  templateUrl: './find-all-worktimes.component.html',
  styleUrls: ['./find-all-worktimes.component.css'],
})
export class FindAllWorktimesComponent implements OnInit {
  user: User = {} as User;
  id: number;
  worktimes: Worktime[];
  customer: Customer[];
  sportsManLength: number;
  sports: Sport[];
  workouts: Workout[];
  instructors: Instructor[];
  idGym: number;

  constructor(
    private userStorageService: UserStorageService,
    private dialog: MatDialog,
    private sportService: SportService,
    private route: ActivatedRoute,
    private worktimeService: WorktimeService,
    private workoutService: WorkoutService,
    private instructorService: InstructorService
  ) {
    this.route.params.subscribe((params) => {
      this.id = this.route.snapshot.params.id;
      this.idGym = this.route.snapshot.parent.params.id;
      this.worktimeService
        .findWorktimeForGym(this.id)
        .subscribe((worktimes) => {
          this.worktimes = worktimes;
        });
      this.userStorageService
        .findUserByUsername(this.userStorageService.getUsername())
        .subscribe((user) => {
          this.user = user;
        });
      this.sportService.findSportForGym(this.id).subscribe((sports) => {
        this.sports = sports;
      });
      this.workoutService
        .findWorkoutsForGym(this.idGym)
        .subscribe((workouts) => {
          this.workouts = workouts;
        });
      this.instructorService
        .findInstructorsForGym(this.idGym)
        .subscribe((instructors) => {
          this.instructors = instructors;
        });
    });
  }

  ngOnInit(): void {}
  showCustomer(id: number, idGym: number) {
    const dialogRef = this.dialog.open(DisplayCustomerComponent, {
      width: '800px',
      data: { id, idGym },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  openAddWorktime(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(AddWorktimeComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  openEditWorktime(idWorktime: number, idGym: number): void {
    const dialogRef = this.dialog.open(AddWorktimeComponent, {
      width: '400px',
      data: { idWorktime, idGym },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  deleteWorktime(id: number) {
    if (confirm('Doriti sa stergeti?')) {
      this.worktimeService.deleteWorktime(id).subscribe(() => {
        window.location.reload();
      });
    }
  }

  openAddCustomer(id: number): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  addSportForGym(id: number) {
    const dialogRef = this.dialog.open(AddSportComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  editSport(idSport: number) {
    const dialogRef = this.dialog.open(AddSportComponent, {
      width: '400px',
      data: { idSport },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  deleteSport(id: number) {
    if (confirm('Doriti sa stergeti?')) {
      this.sportService.deleteSport(id).subscribe(() => {
        window.location.reload();
      });
    }
  }

  addInstructor(id: number) {
    const dialogRef = this.dialog.open(AddInstructorComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  addWorkout(id: number) {
    const dialogRef = this.dialog.open(AddWorkoutComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  editWorkout(idWorkout: number) {
    const dialogRef = this.dialog.open(AddWorkoutComponent, {
      width: '400px',
      data: { idWorkout },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  deleteWorkout(id: number) {
    if (confirm('Doriti sa stergeti?')) {
      this.workoutService.deleteWorkout(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
  deleteInstructor(id: number) {
    if (confirm('Doriti sa stergeti?')) {
      this.instructorService.deleteInstructor(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
  editInstructor(idInstructor: number) {
    const dialogRef = this.dialog.open(AddInstructorComponent, {
      width: '400px',
      data: { idInstructor },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  addWorkoutForSport(id: number) {
    const dialogRef = this.dialog.open(AddWorkoutSportComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  addWorkoutForInstructor(id: number) {
    const dialogRef = this.dialog.open(AddInstructorSportComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  displaySport(id: number) {
    const dialogRef = this.dialog.open(DisplaySportComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
}
