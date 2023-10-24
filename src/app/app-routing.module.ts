import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersmoduleModule } from './users/usersmodule/usersmodule.module';
import { UserRouterModule } from './users/usersmodule/user-router-routing.module';
import { authGuardian } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPatientsComponent } from './patients/list-patients/list-patients.component';

const routes: Routes = [

  {path:'users', loadChildren: () => import('./users/usersmodule/usersmodule.module').then(m => m.UsersmoduleModule)},
  {path:'dashbor', component: DashboardComponent, canActivate:[authGuardian]},
  {path:'dashbor/list-patients', component: ListPatientsComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  UsersmoduleModule,
  UserRouterModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
