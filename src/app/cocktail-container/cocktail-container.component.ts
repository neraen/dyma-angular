import { Component } from '@angular/core';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {CocktailDetailComponent} from "./cocktail-detail/cocktail-detail.component";
import {Cocktail} from "../interface/cocktail.interface";

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
  imports: [
    CocktailListComponent,
    CocktailDetailComponent
  ],
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent {
    public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg',
      description: 'A Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.'
    },
    {
      name: 'Margarita',
      img: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
      description: 'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.'
    },
    {
      name: 'Mai Tai',
      img: 'https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg',
      description: 'The Mai Tai is a cocktail based on rum, Curaçao liqueur, orgeat syrup, and lime juice. It is one of the quintessential cocktails in Tiki culture.'
    }
    ];

    public selectedCocktail: Cocktail = {} as Cocktail;

    ngOnInit() {
        this.selectedCocktail = this.cocktails[0];
    }

    selectCocktail(index: number) {
        console.log('index', index);
        this.selectedCocktail = this.cocktails[index];
    }
}
