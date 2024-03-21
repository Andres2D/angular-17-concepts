import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privateRegisterGuard } from './private-register.guard';

describe('privateRegisterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privateRegisterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
