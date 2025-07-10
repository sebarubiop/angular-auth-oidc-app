import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule]
})
export class ProfileComponent {
  user: any;

  constructor(public auth: AuthService) {
    this.user = this.auth.identityClaims;
  }

  logout() {
    this.auth.logout();
  }
}
