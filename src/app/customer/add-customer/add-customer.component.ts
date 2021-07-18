import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/GymCentersModal';
import { CustomerService } from 'src/app/service/customer.service';
import { WorktimeService } from 'src/app/service/worktime.service';
import { AddWorktimeComponent } from 'src/app/worktime/add-worktime/add-worktime.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customers: Customer[];
  filterCustomers: Customer[];
  customer: Customer = {} as Customer;
  showProgressBar = false;
  gender: any = {};

  constructor(
    public dialogRef: MatDialogRef<AddWorktimeComponent>,
    private worktimeService: WorktimeService,
    @Inject(MAT_DIALOG_DATA) public data,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.findAllCustomers().subscribe((customers) => {
      this.customers = customers;
      this.worktimeService
        .findCustomerForWorktime(this.data.id)
        .subscribe((existsCustomer) => {
          this.filterCustomers = existsCustomer;
          this.filterCustomers.forEach((s) => {
            this.customers = this.customers.filter((item) => item.id !== s.id);
          });
        });
    });
  }

  selectedValue(event: any) {
    const idCustomer = event.value;
    this.worktimeService
      .addCustomerForWork(idCustomer, this.data.id)
      .subscribe(() => {
        window.location.reload();
      });
  }

  setGender() {
    this.customer.sex = this.gender;
  }
}
