import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { Customer, Payment, Sport, User } from 'src/app/GymCentersModal';
import { AddPaymentComponent } from 'src/app/payment/add-payment/add-payment.component';
import { CustomerService } from 'src/app/service/customer.service';
import { PaymentService } from 'src/app/service/payment.service';
import { SportService } from 'src/app/service/sport.service';
import { UserStorageService } from 'src/app/service/user-storage.service';
import { WorktimeService } from 'src/app/service/worktime.service';
import { AddSportsCustomerComponent } from 'src/app/sports/add-sports-customer/add-sports-customer.component';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css'],
})
export class DisplayCustomerComponent implements OnInit {
  customer: Customer[];
  user: User = {} as User;
  sports: Sport[];
  idGym: number;
  payments: Payment[];

  constructor(
    public dialogRef: MatDialogRef<DisplayCustomerComponent>,
    private worktimeService: WorktimeService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private userStorageService: UserStorageService,
    private sportService: SportService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.idGym = this.data.idGym;
    this.worktimeService
      .findCustomerForWorktime(this.data.id)
      .subscribe((customer) => {
        this.customer = customer;
      });
    this.userStorageService
      .findUserByUsername(this.userStorageService.getUsername())
      .subscribe((user) => {
        this.user = user;
      });
  }

  deleteCustomer(id: number) {
    if (confirm('Doriti sa stergeti clientul?')) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        window.location.reload();
      });
    }
  }

  addPayment(id: number) {
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      width: '800px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  addSportForCustomer(id: number, idGym: number) {
    const dialogRef = this.dialog.open(AddSportsCustomerComponent, {
      width: '800px',
      data: { id, idGym },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  showSports(id: number) {
    this.sportService.findSportForCustomer(id).subscribe((sports) => {
      this.sports = sports;
    });
    this.paymentService.findPaymentForCustomer(id).subscribe((payments) => {
      this.payments = payments;
    });
  }

  deletePayment(id: number) {
    if (confirm('Doriti sa stergeti plata?')) {
      this.paymentService.deletePayment(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
