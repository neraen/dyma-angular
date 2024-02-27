import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {CommonModule} from "@angular/common";
import {PanierService} from "../../shared/services/panier.service";
import {Ingredient} from "../../shared/interfaces/ingredient.interface";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CocktailService} from "../../shared/services/cocktail.service";

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent implements OnInit{
    cocktail: Cocktail = {} as Cocktail;
    private index: string;

    constructor(private panierService: PanierService, private cocktailService: CocktailService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            this.cocktail = this.cocktailService.getCocktail(+paramMap.get('index'));
        });
    }

    public addToPanier(): void {
        this.panierService.addToPanier(this.cocktail.ingredients as Ingredient[]);
    }
}
