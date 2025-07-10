import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isBrowser = typeof window !== 'undefined';
  private loggedIn$: BehaviorSubject<boolean>;

  constructor(private oauthService: OAuthService) {
    this.loggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn);
    if (this.isBrowser) {
      this.oauthService.events.subscribe(() => {
        this.loggedIn$.next(this.isLoggedIn);
      });
    }
  }

  initializeAuth(): () => Promise<void> {
    return async () => {
      if (!this.isBrowser) return; // ✅ Avoid calling this on the server
      this.oauthService.configure(authConfig);
      await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      this.loggedIn$.next(this.isLoggedIn);
    };
  }

  login() {
    if (!this.isBrowser) return; // ✅ Avoid calling this on the server
    this.oauthService.initCodeFlow();
  }

  logout() {
    if (!this.isBrowser) return; // ✅ Avoid calling this on the server
    this.oauthService.logOut();
  }

  get identityClaims(): any {
    return this.isBrowser ? this.oauthService.getIdentityClaims() : null;
  }

  get isLoggedIn(): boolean {
    return this.isBrowser ? this.oauthService.hasValidAccessToken() : false;
  }

  get isLoggedIn$() {
    return this.loggedIn$.asObservable();
  }
}
