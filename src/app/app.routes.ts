import { Routes } from '@angular/router';
import {PanierContainerComponent} from "./panier-container/panier-container.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";

export const routes: Routes = [
    {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
    {path: 'cocktails', component: CocktailContainerComponent},
    {path: 'panier', component: PanierContainerComponent},
];
