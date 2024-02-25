import {Component, Input} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent {
    @Input() cocktail: Cocktail = {} as Cocktail;
}
