import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gym, User } from '../GymCentersModal';
import { GymService } from '../service/gym.service';
import { UserStorageService } from '../service/user-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  gyms: Gym[];
  user: User = {} as User;
  username: any;

  constructor(
    private gymService: GymService,
    private router: Router,
    private userStorageService: UserStorageService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.username = this.userStorageService.getUsername();
      this.userStorageService
        .findUserByUsername(this.username)
        .subscribe((user) => {
          this.user = user;
        });
    });
  }

  ngOnInit(): void {
    this.gymService.findAllGyms().subscribe((gyms) => {
      this.gyms = gyms;
    });
  }

  logout(id: number) {
    this.userStorageService.signOut();
    this.router.navigateByUrl('/login');
    this.userStorageService.deleteUser(id).subscribe();
  }
  alertaDespre() {
    window.alert(
      "Pagina 'Despre Noi' nu este disponibila momentan. Veti fi directionat catre 'Acasa'"
    );
  }

  alertaContact() {
    window.alert(
      "Pagina 'Contact' nu este disponibila momentan. Veti fi directionat catre 'Acasa'"
    );
  }
}
