import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sport } from 'src/app/GymCentersModal';
import { SportService } from 'src/app/service/sport.service';

@Component({
  selector: 'app-display-sport',
  templateUrl: './display-sport.component.html',
  styleUrls: ['./display-sport.component.css'],
})
export class DisplaySportComponent implements OnInit {
  sport: Sport = {} as Sport;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sportService: SportService
  ) {}

  ngOnInit(): void {
    this.sportService.findSportById(this.data.id).subscribe((sport) => {
      this.sport = sport;
    });
  }
}
