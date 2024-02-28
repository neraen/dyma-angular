import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientListComponent} from "./ingredient-list/ingredient-list.component";
import {PanierService} from "../shared/services/panier.service";
import {Ingredient} from "../shared/interfaces/ingredient.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-panier-container',
  standalone: true,
    imports: [
        IngredientListComponent
    ],
  templateUrl: './panier-container.component.html',
  styleUrl: './panier-container.component.scss'
})
export class PanierContainerComponent implements OnInit, OnDestroy {
    public ingredients: Ingredient[] = [];
    public subscription: Subscription = new Subscription();
    constructor(private panierService: PanierService){

    }

    ngOnInit(): void {
        this.subscription = this.panierService.ingredients$.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
