import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {Cocktail} from "./interface/cocktail.interface";
import {CocktailDetailComponent} from "./cocktail-container/cocktail-detail/cocktail-detail.component";
import {CocktailListComponent} from "./cocktail-container/cocktail-list/cocktail-list.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CocktailDetailComponent, CocktailListComponent, CocktailContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg',
    description: 'A Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.'
  };
}
