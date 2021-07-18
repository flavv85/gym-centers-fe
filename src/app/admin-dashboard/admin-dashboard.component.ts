import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, Gym, User, Workout } from '../GymCentersModal';
import { CustomerService } from '../service/customer.service';
import { GymService } from '../service/gym.service';
import { UserStorageService } from '../service/user-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminDashboardComponent implements OnInit {
  gym: Gym = {} as Gym;
  user: User = {} as User;
  customer: Customer = {} as Customer;
  workout: Workout = {} as Workout;
  username: string;
  gender: any = {};
  showProgressBar = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userStorageService: UserStorageService,
    private gymService: GymService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params.username;
    this.userStorageService
      .findUserByUsername(this.username)
      .subscribe((user) => {
        this.user = user;
      });
  }
  setGender() {
    this.customer.sex = this.gender;
  }
  addCustomer() {
    this.showProgressBar = true;
    this.customerService.addCustomer(this.customer).subscribe((customer) => {
      this.customer = customer;
      window.location.reload();
    });
  }
  addGym() {
    this.showProgressBar = true;
    this.gymService.addGym(this.gym).subscribe((gym) => {
      this.gym = gym;
      window.location.reload();
    });
  }

  home() {
    window.location.replace(`/home/${this.username}`);
  }

  logout(id: number) {
    this.userStorageService.signOut();
    this.router.navigateByUrl('/login');
    this.userStorageService.deleteUser(id).subscribe();
  }
}
