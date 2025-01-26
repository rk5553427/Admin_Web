import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeshboardComponent } from './deshboard/deshboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, // Direct path for LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent, // Direct path for RegisterComponent
  },
  {
    path: 'deshboard',
    component: DeshboardComponent, // Direct path for FirstPageComponent
  },
  {
    path: 'bus', loadChildren: () => import('./bus/bus.module').then(m => m.BusModule), // Lazy-loaded BusModule
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full', // Default path
  },
  {
    path: '**',
    redirectTo: '/login', // Catch-all route for undefined paths
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
