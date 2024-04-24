import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, DividerModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export default class LoginFormComponent {}
