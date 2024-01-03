import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authservice = inject ( AuthService );
  const router      = inject ( Router );

  if ( authservice.authStatus() === AuthStatus.authenticated ) return true;

  router.navigateByUrl ( '/auth/login' );
  return false;
};
