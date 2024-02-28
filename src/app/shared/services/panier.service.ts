import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Ingredient} from "../interfaces/ingredient.interface";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);
  constructor() { }

    addToPanier(ingredients: Ingredient[]): void {
    const currentValue = this.ingredients$.value;
    if(currentValue){
        const ingredientsUpdated = [...currentValue, ...ingredients].reduce((acc: {[x: string]: number}, ingredient: Ingredient) => {
            if(acc[ingredient.name]){
                acc[ingredient.name] += ingredient.quantity;
            }else {
                acc[ingredient.name] = ingredient.quantity;
            }
            return acc;
        }, {});
        const result = Object.keys(ingredientsUpdated).map(ingredientName => ({
            name: ingredientName,
            quantity: ingredientsUpdated[ingredientName]
        }))
        this.ingredients$.next(result);
    }else{
        this.ingredients$.next(ingredients);
    }

  }
}
