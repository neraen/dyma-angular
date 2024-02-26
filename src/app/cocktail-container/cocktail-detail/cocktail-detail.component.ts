import {Component, Input} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {CommonModule} from "@angular/common";
import {PanierService} from "../../shared/services/panier.service";
import {Ingredient} from "../../shared/interfaces/ingredient.interface";

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent {
    @Input() cocktail: Cocktail = {} as Cocktail;

    constructor(private panierService: PanierService) {
    }

    public addToPanier(): void {
        this.panierService.addToPanier(this.cocktail.ingredients as Ingredient[]);
    }
}
