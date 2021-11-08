import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from './shared/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }
  public getCocktail(): Observable<Cocktail[]> {
    const obs1 = this.service.get<{ data: Cocktail[] }>(
      'assets/cocktails.json'
    );
    return obs1.pipe(
      map((result) => {
        return result.data;
      })
    );
  }
}
