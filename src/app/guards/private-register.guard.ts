import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRegisterGuard: CanActivateFn = (route, state) => {
  const routerService: Router = inject(Router);
  if('token' in localStorage) {
    return true;
  }else {
    routerService.navigateByUrl('/');
    return false;
  }
};
