import { Component } from '@angular/core';
import {
  LoginFormBannerComponent,
  LoginFormComponent,
  LoginFormFooterComponent,
} from '../../components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    LoginFormBannerComponent,
    LoginFormFooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {}
