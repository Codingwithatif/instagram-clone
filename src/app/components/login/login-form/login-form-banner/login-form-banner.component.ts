import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login-form-banner',
  standalone: true,
  imports: [CardModule],
  templateUrl: './login-form-banner.component.html',
  styleUrl: './login-form-banner.component.css',
})
export default class LoginFormBannerComponent {}
