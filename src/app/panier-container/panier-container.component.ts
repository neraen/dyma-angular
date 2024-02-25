import { Component } from '@angular/core';
import {IngredientListComponent} from "./ingredient-list/ingredient-list.component";

@Component({
  selector: 'app-panier-container',
  standalone: true,
    imports: [
        IngredientListComponent
    ],
  templateUrl: './panier-container.component.html',
  styleUrl: './panier-container.component.scss'
})
export class PanierContainerComponent {

}
