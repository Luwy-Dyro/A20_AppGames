import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

/*  */
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
/*  */

const { auth0domain, auth0clientId } = environment;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAuth0({
      domain: auth0domain,
      clientId: auth0clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),

  ]



};
