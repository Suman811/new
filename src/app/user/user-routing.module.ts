import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { UserComponent } from './user.component';

const routes: Routes = [
  // {path:'dashboard', component:DashboardComponent, canActivate:[authGuard]},

  {
    path: '', component: UserComponent,
    children: [
      {
        path: '',//insurancedata
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
