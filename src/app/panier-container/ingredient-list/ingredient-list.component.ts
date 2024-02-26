import {Component, Input} from '@angular/core';
import {Ingredient} from "../../shared/interfaces/ingredient.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss'
})
export class IngredientListComponent {
    @Input() ingredients: Ingredient[] = [];
}
