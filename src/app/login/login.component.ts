import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../GymCentersModal';
import { UserStorageService } from '../service/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {} as User;

  constructor(
    private router: Router,
    private userStorageService: UserStorageService
  ) {}

  ngOnInit(): void {}

  login() {
    this.userStorageService
      .findUserByUsername(this.user.username)
      .subscribe((user) => {
        if (user == null) {
          if (this.user.username == 'admin' && this.user.password == 'admin') {
            if (this.user != null) {
              this.user.admin = true;
              this.userStorageService
                .addUser(this.user)
                .subscribe((addUser) => {
                  this.user = addUser;
                  this.router.navigate([
                    '/admin-dashboard/',
                    this.user.username,
                  ]);
                  this.userStorageService.saveUsername(this.user.username);
                });
            }
          } else {
            if (this.user != null) {
              this.user.admin = false;
              this.userStorageService
                .addUser(this.user)
                .subscribe((addUser) => {
                  this.user = addUser;
                  this.userStorageService.saveUsername(this.user.username);
                  this.router.navigate(['/home/', this.user.username]);
                });
            }
          }
        } else {
          this.userStorageService
            .findUserByUsername(this.user.username)
            .subscribe((user) => {
              if (
                this.user.username == 'admin' &&
                this.user.password == 'admin'
              ) {
                if (this.user != null) {
                  this.user.admin = true;
                  this.userStorageService
                    .editUser(this.user, user.id)
                    .subscribe((addUser) => {
                      this.user = addUser;
                      this.router.navigate([
                        '/admin-dashboard/',
                        this.user.username,
                      ]);
                      this.userStorageService.saveUsername(this.user.username);
                    });
                }
              } else {
                if (this.user != null) {
                  this.user.admin = false;
                  this.userStorageService
                    .editUser(this.user, user.id)
                    .subscribe((addUser) => {
                      this.user = addUser;
                      this.userStorageService.saveUsername(this.user.username);
                      this.router.navigate(['/home/', this.user.username]);
                    });
                }
              }
            });
        }
      });
  }
}
