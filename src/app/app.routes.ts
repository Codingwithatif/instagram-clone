import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
];
