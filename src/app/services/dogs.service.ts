import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { DogsApiResponse } from '../interfaces/home.interface';

@Injectable()
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<string> {
    const urlApi = `https://dog.ceo/api/breeds/image/random`;
    return this.http.get<DogsApiResponse>(urlApi).pipe(
      map(dog => dog.message)
    );
  }

}
