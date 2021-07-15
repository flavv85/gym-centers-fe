import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Gym, User } from 'src/app/GymCentersModal';
import { GymService } from 'src/app/service/gym.service';
import { UserStorageService } from 'src/app/service/user-storage.service';
import { EditGymComponent } from '../edit-gym/edit-gym.component';

@Component({
  selector: 'app-find-all-gyms',
  templateUrl: './find-all-gyms.component.html',
  styleUrls: ['./find-all-gyms.component.css'],
})
export class FindAllGymsComponent implements OnInit {
  gym: Gym = {} as Gym;
  user: User = {} as User;
  id: number;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private gymService: GymService,
    private userStorageService: UserStorageService,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe((params) => {
      this.username = this.userStorageService.getUsername();
      this.id = this.route.snapshot.params.id;
      this.userStorageService
        .findUserByUsername(this.username)
        .subscribe((user) => {
          this.user = user;
        });
      this.gymService.findGymById(this.id).subscribe((gym) => {
        this.gym = gym;
      });
    });
  }

  ngOnInit(): void {}

  openEditGym(id: number): void {
    const dialogRef = this.dialog.open(EditGymComponent, {
      width: '400px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  deleteGym(id: number) {
    if (confirm('Are you sure')) {
      this.gymService.deleteGym(id).subscribe(() => {
        window.location.replace(`/home/${this.username}`);
      });
    }
  }
}
