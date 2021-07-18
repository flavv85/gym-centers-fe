import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { FindAllGymsComponent } from './gyms/find-all-gyms/find-all-gyms.component';
import { EditGymComponent } from './gyms/edit-gym/edit-gym.component';
import { AddSportComponent } from './sports/add-sport/add-sport.component';
import { AddSportsCustomerComponent } from './sports/add-sports-customer/add-sports-customer.component';
import { DisplaySportComponent } from './sports/display-sport/display-sport.component';
import { AddWorktimeComponent } from './worktime/add-worktime/add-worktime.component';
import { FindAllWorktimesComponent } from './worktime/find-all-worktimes/find-all-worktimes.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { DisplayCustomerComponent } from './customer/display-customer/display-customer.component';
import { AddWorkoutComponent } from './workouts/add-workout/add-workout.component';
import { AddWorkoutSportComponent } from './workouts/add-workout-sport/add-workout-sport.component';
import { AddInstructorComponent } from './instructors/add-instructor/add-instructor.component';
import { AddInstructorSportComponent } from './instructors/add-instructor-sport/add-instructor-sport.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    HomeComponent,
    FindAllGymsComponent,
    EditGymComponent,
    AddSportComponent,
    AddSportsCustomerComponent,
    DisplaySportComponent,
    AddWorktimeComponent,
    FindAllWorktimesComponent,
    AddCustomerComponent,
    DisplayCustomerComponent,
    AddWorkoutComponent,
    AddWorkoutSportComponent,
    AddInstructorComponent,
    AddInstructorSportComponent,
    AddPaymentComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
