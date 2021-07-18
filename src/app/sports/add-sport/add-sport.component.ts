import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sport } from 'src/app/GymCentersModal';
import { SportService } from 'src/app/service/sport.service';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css'],
})
export class AddSportComponent implements OnInit {
  sport: Sport = {} as Sport;
  showProgressBar = false;
  title = 'Adauga infomarmatii despre sport';

  constructor(
    public dialogRef: MatDialogRef<AddSportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sportService: SportService
  ) {}

  ngOnInit(): void {
    if (this.data.idSport != null) {
      this.title = 'Editeaza detalii sport';
      this.sportService.findSportById(this.data.idSport).subscribe((sport) => {
        this.sport = sport;
      });
    }
  }

  addSport() {
    this.showProgressBar = true;
    if (this.data.idSport != null) {
      this.sportService
        .editSport(this.sport, this.data.idSport)
        .subscribe((sport) => {
          this.sport = sport;
          window.location.reload();
        });
    }
    this.sportService
      .addSportForGym(this.sport, this.data.id)
      .subscribe((sport) => {
        this.sport = sport;
        window.location.reload();
      });
  }
}
