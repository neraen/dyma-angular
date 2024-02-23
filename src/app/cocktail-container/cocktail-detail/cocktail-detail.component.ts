import {Component, Input} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent {
    @Input() cocktail: Cocktail = {} as Cocktail;
}
