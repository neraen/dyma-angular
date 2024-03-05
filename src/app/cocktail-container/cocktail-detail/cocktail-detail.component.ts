import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {CommonModule} from "@angular/common";
import {PanierService} from "../../shared/services/panier.service";
import {Ingredient} from "../../shared/interfaces/ingredient.interface";
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {CocktailService} from "../../shared/services/cocktail.service";

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent implements OnInit{
    public cocktail: Cocktail;
    private index: string;

    constructor(private panierService: PanierService, private cocktailService: CocktailService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            this.cocktailService.getCocktail(+paramMap.get('index')!).subscribe((cocktail: Cocktail) => {
                this.cocktail = cocktail;
            })
        });
    }

    public addToPanier(): void {
        this.panierService.addToPanier(this.cocktail.ingredients as Ingredient[]);
    }
}
