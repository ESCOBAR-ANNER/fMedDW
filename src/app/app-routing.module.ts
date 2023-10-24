import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersmoduleModule } from './users/usersmodule/usersmodule.module';
import { UserRouterModule } from './users/usersmodule/user-router-routing.module';
import { HomeComponent } from './shared/home/home.component';
import { authGuardian } from './auth.guard';

const routes: Routes = [

  {path:'users', loadChildren: () => import('./users/usersmodule/usersmodule.module').then(m => m.UsersmoduleModule)},
  {path: 'home', component: HomeComponent, canActivate:[authGuardian]}
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
