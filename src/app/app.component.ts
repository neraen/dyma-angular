import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {Cocktail} from "./shared/interfaces/cocktail.interface";
import {CocktailDetailComponent} from "./cocktail-container/cocktail-detail/cocktail-detail.component";
import {CocktailListComponent} from "./cocktail-container/cocktail-list/cocktail-list.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {CocktailService} from "./shared/services/cocktail.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HeaderComponent, CocktailDetailComponent, CocktailListComponent, CocktailContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    constructor(private cocktailService: CocktailService) {

    }
    ngOnInit(): void {
        this.cocktailService.fetchCocktails().subscribe();

    }

}
