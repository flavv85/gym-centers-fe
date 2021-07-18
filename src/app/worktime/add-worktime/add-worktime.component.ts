import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Worktime } from 'src/app/GymCentersModal';
import { WorktimeService } from 'src/app/service/worktime.service';

@Component({
  selector: 'app-add-worktime',
  templateUrl: './add-worktime.component.html',
  styleUrls: ['./add-worktime.component.css'],
})
export class AddWorktimeComponent implements OnInit {
  showProgressBar = false;
  worktime: Worktime = {} as Worktime;
  title = 'Adauga detalii program exercitii';

  constructor(
    public dialogRef: MatDialogRef<AddWorktimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private worktimeService: WorktimeService
  ) {}

  ngOnInit(): void {
    if (this.data.idWorktime != null && this.data.idGym != null) {
      this.title = 'Editeaza detalii program exercitii';
      this.worktimeService
        .findWorktimeById(this.data.idWorktime)
        .subscribe((worktime) => {
          this.worktime = worktime;
        });
    }
  }

  addWorktime() {
    this.showProgressBar = true;
    if (this.data.idWorktime != null && this.data.idGym != null) {
      this.worktimeService
        .editWorktime(this.worktime, this.data.idWorktime, this.data.idGym)
        .subscribe((worktime) => {
          this.worktime = worktime;
        });
      window.location.reload();
    } else {
      this.worktimeService
        .addWorktimeForGym(this.worktime, this.data.id)
        .subscribe((worktime) => {
          this.worktime = worktime;
          window.location.reload();
        });
    }
  }
}
