import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, first, map, Observable, tap} from "rxjs";
import {Cocktail} from "../interfaces/cocktail.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CocktailService {

    public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([]);

    constructor(private httpClient: HttpClient) {

       // this.seed();
    }
    public getCocktail(index: number): Observable<Cocktail>{
       return this.cocktails$.pipe(
           filter((cocktails: Cocktail[]) => cocktails !== null),
           first(),
           map((cocktails: Cocktail[]) => {
               return cocktails[index];
           })
       )
    }

    public addCocktail(cocktail: Cocktail): void {
        const value = this.cocktails$.value
        this.cocktails$.next([...value, cocktail]);
    }

    public editCocktail(editedCocktail: Cocktail): void {
        const value = this.cocktails$.value;

        //On recherche parmis tout les cocktails, le cocktail que l'on édite
        this.cocktails$.next(value.map((cocktail: Cocktail) => {
            if(cocktail.name === editedCocktail.name) {
                return editedCocktail;
            } else {
                return cocktail
            }
        }))
    }

    public fetchCocktails(): Observable<Cocktail[]>{
        return this.httpClient.get('https://restapi.fr/api/cocktails').pipe(
            tap((cocktails: Cocktail[]) => {
                this.cocktails$.next(cocktails);
            })
        )
    }


    public seed(){
        this.httpClient.get<Cocktail[] | []>('https://restapi.fr/api/cocktails')
                       .subscribe((cocktails: Cocktail[] | []) => {
                            if(!cocktails.length) {
                                this.httpClient.post('https://restapi.fr/api/cocktails', {
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
                                        }]}
                                 ).subscribe();
                            }
                       })
    }
}

