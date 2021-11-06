import { Injectable } from '@angular/core';
import { Cocktail } from './shared/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  cocktails: Cocktail[];
  constructor() {
    this.cocktails = [
      new Cocktail(
        'BloodyMary',
        5,
        'https://www.bar-maison.com/wp-content/uploads/2021/01/bloody-mary.jpg'
      ),
      new Cocktail(
        'Margarita',
        3,
        'https://www.bar-maison.com/wp-content/uploads/2021/01/cocktail-margarita.jpg'
      ),
      new Cocktail(
        'Manhattan',
        4,
        'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg'
      ),
    ];
  }

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
