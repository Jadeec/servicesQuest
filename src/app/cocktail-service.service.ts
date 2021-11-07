import { Injectable } from '@angular/core';
import { Cocktail } from './shared/cocktail.model';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  cocktails: Cocktail[];
  private service : HttpClient; 
  constructor(param_service: HttpClient) {
  this.service = param_service;
  }

  getCocktails(): Observable<string> {
    const obs1 : Observable<any> = this.service.get("assets/cocktails.json")
  }
}
