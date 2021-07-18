import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FindAllGymsComponent } from './gyms/find-all-gyms/find-all-gyms.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FindAllWorktimesComponent } from './worktime/find-all-worktimes/find-all-worktimes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home/:username',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'find-all-gyms/:id',
        component: FindAllGymsComponent,
        children: [
          {
            path: 'find-all-worktime/:id',
            component: FindAllWorktimesComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'admin-dashboard/:username',
    component: AdminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
