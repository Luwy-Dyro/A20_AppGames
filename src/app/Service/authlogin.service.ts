import { effect, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthloginService {
  private _auth0Service: AuthService = inject(AuthService);

  public user$ = this._auth0Service.user$;
  public isAuthenticated$ = this._auth0Service.isAuthenticated$;
  public isLoading$ = this._auth0Service.isLoading$;

  public login(): void {
    this._auth0Service.loginWithRedirect(
      // {
      //   authorizationParams: {
      //     scope: 'openid profile email', 
      //   },
      // }
    );
  }

  public logout(): void {
    this._auth0Service.logout();
  }


idTokenClaims = toSignal(this._auth0Service.idTokenClaims$);

logClaims = effect(() => {
  const claims = this.idTokenClaims();
  if (claims) {
    console.log('ID Token claims:', claims);
    // claims.email debería existir si pediste scope 'email'
  }
});

}
