import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cocktail} from "../interfaces/cocktail.interface";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

    public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([
        {
            name: 'Mojito',
            img: 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg',
            description: 'A Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.',
            ingredients: [
                {
                    name: 'Menthe',
                    quantity: 2
                },
                {
                    name: 'Perrier',
                    quantity: 1
                },
                {
                    name: 'Rhum',
                    quantity: 3
                }
            ]
        },
        {
            name: 'Margarita',
            img: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
            description: 'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.',
            ingredients: [
                {
                    name: 'Menthe',
                    quantity: 2
                },
                {
                    name: 'Perrier',
                    quantity: 1
                },
                {
                    name: 'Rhum',
                    quantity: 3
                }
            ]
        },
        {
            name: 'Mai Tai',
            img: 'https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg',
            description: 'The Mai Tai is a cocktail based on rum, Curaçao liqueur, orgeat syrup, and lime juice. It is one of the quintessential cocktails in Tiki culture.',
            ingredients: [
                {
                    name: 'Menthe',
                    quantity: 2
                },
                {
                    name: 'Perrier',
                    quantity: 1
                },
                {
                    name: 'Rhum',
                    quantity: 3
                }
            ]
        }
    ]);

    public getCocktail(index: number): Cocktail{
        return this.cocktails$.value[index];
    }
  constructor() { }
}
