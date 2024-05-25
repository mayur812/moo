import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/normal/user-dashboard/user-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { NormalGuard } from './guards/normal.guard';
import { NobackGuard } from './guards/noback.guard';

const routes: Routes = [


  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[NobackGuard],
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
    canActivate:[NobackGuard],
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    canActivate:[NobackGuard],
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard],
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
