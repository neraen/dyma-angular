import { Routes } from '@angular/router';
import {PanierContainerComponent} from "./panier-container/panier-container.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {CocktailDetailComponent} from "./cocktail-container/cocktail-detail/cocktail-detail.component";

export const routes: Routes = [
    {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
    {path: 'cocktails', component: CocktailContainerComponent, children: [
        {path: ':index', component: CocktailDetailComponent}   ,
        {path: '', redirectTo: '0', pathMatch: 'full'}
    ]},
    {path: 'panier', component: PanierContainerComponent},
];
