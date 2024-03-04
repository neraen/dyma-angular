import {Component, OnDestroy, OnInit} from '@angular/core';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {CocktailDetailComponent} from "./cocktail-detail/cocktail-detail.component";
import {Cocktail} from "../shared/interfaces/cocktail.interface";
import {CocktailService} from "../shared/services/cocktail.service";
import {Observable, Subscription} from "rxjs";
import {RouterOutlet} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
    imports: [
        CocktailListComponent,
        CocktailDetailComponent,
        RouterOutlet,
        AsyncPipe
    ],
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent {
    public cocktails$: Observable<Cocktail[]> = this.cocktailService.cocktails$;
    constructor(private cocktailService: CocktailService) {}
}
