import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instructor } from 'src/app/GymCentersModal';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
})
export class AddInstructorComponent implements OnInit {
  showProgressBar = false;
  instructor: Instructor = {} as Instructor;
  title = 'Adauga informatii instructor';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    if (this.data.idInstructor != null) {
      this.title = 'Editeaza detalii instructor';
      this.instructorService
        .findInstructorById(this.data.idInstructor)
        .subscribe((instructor) => {
          this.instructor = instructor;
        });
    }
  }

  addInstructor() {
    this.showProgressBar = true;
    if (this.data.idInstructor != null) {
      this.instructorService
        .editInstructor(this.instructor, this.data.idInstructor)
        .subscribe((instructor) => {
          this.instructor = instructor;
          window.location.reload();
        });
    }
    this.instructorService
      .addInstructorForGym(this.instructor, this.data.id)
      .subscribe((instructor) => {
        this.instructor = instructor;
        window.location.reload();
      });
  }
}
