import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sport } from 'src/app/GymCentersModal';
import { SportService } from 'src/app/service/sport.service';

@Component({
  selector: 'app-add-sports-customer',
  templateUrl: './add-sports-customer.component.html',
  styleUrls: ['./add-sports-customer.component.css'],
})
export class AddSportsCustomerComponent implements OnInit {
  sports: Sport[];
  filterSports: Sport[];

  constructor(
    public dialogRef: MatDialogRef<AddSportsCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private sportService: SportService
  ) {}

  ngOnInit(): void {
    this.sportService.findSportForGym(this.data.idGym).subscribe((sports) => {
      this.sports = sports;
      this.sportService.findSportForCustomer(this.data.id).subscribe((data) => {
        this.filterSports = data;
        this.filterSports.forEach((s) => {
          this.sports = this.sports.filter((item) => item.id !== s.id);
        });
      });
    });
  }

  selectedValue(event: any) {
    const idSportMan = event.value;
    this.sportService
      .addSportForCustomer(idSportMan, this.data.id)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
