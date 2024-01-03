import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authservice = inject ( AuthService );
  const router      = inject ( Router );

  if ( authservice.authStatus() === AuthStatus.notAuthenticated ) return true;

  router.navigateByUrl ( '/dashboard' );
  return false;
};
