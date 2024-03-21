import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { registerResolverResolver } from './register-resolver.resolver';

describe('registerResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => registerResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
