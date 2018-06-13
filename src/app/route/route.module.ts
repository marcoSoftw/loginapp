import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LoginPageComponent } from '../componentes/login-page/login-page.component';
import { HomePageComponent } from '../componentes/home-page/home-page.component';
import { RegisterPageComponent } from '../componentes/register-page/register-page.component';
import { PrivadoPageComponent} from '../componentes/privado-page/privado-page.component';
import { NotFoundPageComponent} from '../componentes/not-found-page/not-found-page.component';

import { AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
  

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class RouteModule { }
