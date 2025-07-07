import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule]
})
export class LoginComponent {
  private _destroyed$ = new Subject<void>();
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isLoggedIn$.pipe(takeUntil(this._destroyed$)).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/profile']);
      }
    });
  }

  login() {
    this.auth.login();
  }
  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
