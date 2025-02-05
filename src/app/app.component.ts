import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LoginFormBannerComponent,
  LoginFormComponent,
  LoginFormFooterComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginFormComponent,
    LoginFormBannerComponent,
    LoginFormFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'instagram-clone';
}
