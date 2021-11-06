import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { Cocktail } from '../shared/cocktail.model';
@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  public cocktailList: Cocktail[] = [];
  constructor(private cocktailService: CocktailServiceService) {}

  ngOnInit(): void {
    this.addCocktail();
  }
  addCocktail() {
    this.cocktailList = this.cocktailService.getCocktails();
  }
}
