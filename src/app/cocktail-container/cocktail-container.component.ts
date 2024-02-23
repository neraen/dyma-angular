import {Component, OnDestroy, OnInit} from '@angular/core';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {CocktailDetailComponent} from "./cocktail-detail/cocktail-detail.component";
import {Cocktail} from "../shared/interfaces/cocktail.interface";
import {CocktailService} from "../shared/services/cocktail.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
  imports: [
    CocktailListComponent,
    CocktailDetailComponent
  ],
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
    public cocktails: Cocktail[] = [];

    public selectedCocktail: Cocktail = {} as Cocktail;

    public subscription: Subscription = new Subscription();

    constructor(private cocktailService: CocktailService) {}

    ngOnInit() {
        this.subscription.add(this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
            this.cocktails = cocktails;
        }));

        this.subscription.add(this.cocktailService.selectedCocktail$.subscribe((cocktail: Cocktail) => {
            this.selectedCocktail = cocktail;
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    selectCocktail(index: number) {
        this.cocktailService.selectCocktail(index);
    }
}
