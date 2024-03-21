import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DogsService } from '../services/dogs.service';

export const registerResolver: ResolveFn<Observable<string>> = (route, state) => {
  const dogsService: DogsService = inject(DogsService);
  return dogsService.getDogs();
};
