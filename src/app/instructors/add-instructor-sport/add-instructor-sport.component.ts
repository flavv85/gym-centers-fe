import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instructor } from 'src/app/GymCentersModal';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-add-instructor-sport',
  templateUrl: './add-instructor-sport.component.html',
  styleUrls: ['./add-instructor-sport.component.css'],
})
export class AddInstructorSportComponent implements OnInit {
  instructors: Instructor[];
  filterInstructors: Instructor[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.instructorService.findAllInstructors().subscribe((instructors) => {
      this.instructors = instructors;
      console.log(this.instructors);
      this.instructorService
        .findInstructorsForSport(this.data.id)
        .subscribe((filterInstructors) => {
          this.filterInstructors = filterInstructors;
          this.filterInstructors.forEach((s) => {
            this.instructors = this.instructors.filter(
              (item) => item.id !== s.id
            );
          });
        });
    });
  }
  selectedValue(event: any) {
    const id = event.value;
    this.instructorService
      .addInstructorForSport(id, this.data.id)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
