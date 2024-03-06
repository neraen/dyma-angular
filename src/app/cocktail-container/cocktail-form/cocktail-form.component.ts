import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, ParamMap, Router, RouterLink} from "@angular/router";
import {CocktailService} from "../../shared/services/cocktail.service";
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {Ingredient} from "../../shared/interfaces/ingredient.interface";
import {first} from "rxjs";


@Component({
  selector: 'app-cocktail-form',
  standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cocktail-form.component.html',
  styleUrl: './cocktail-form.component.scss'
})
export class CocktailFormComponent implements OnInit{
    public cocktailForm!: FormGroup;
    public cocktail?: Cocktail;

    constructor(
        private formBuilder: FormBuilder,
        private cocktailService: CocktailService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(){
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            const index = paramMap.get('index');
            if(index !== null){
                this.cocktailService.getCocktail(+index)
                    .pipe(first(x => !!x))
                    .subscribe((cocktail:Cocktail) => {
                        this.cocktail = cocktail;
                        this.cocktailForm = this.initForm(this.cocktail);
                })
            } else {
                this.cocktailForm = this.initForm();
            }
        })

       this.initForm(this.cocktail);
    }

    private initForm(cocktail: Cocktail = {name: '', description: '', img: '', ingredients: []}): FormGroup {
        return this.formBuilder.group({
            name: [cocktail.name, Validators.required],
            img: [cocktail.img, Validators.required],
            description: [cocktail.description, Validators.required],
            ingredients: this.formBuilder.array(cocktail.ingredients.map((ingredient: Ingredient) => this.formBuilder.group({
                name: [ingredient.name, Validators.required],
                quantity: [ingredient.quantity, Validators.required]
            })), Validators.required)
        })
    }

    get ingredients(){
        return this.cocktailForm.get('ingredients') as FormArray;
    }

    public addIngredient(): void {
        this.ingredients.push(this.formBuilder.group({
            name: ['', Validators.required],
            quantity: [0, Validators.required]
        }))
    }

    public submit(): void {
        console.log(this.cocktailForm);
        if(this.cocktail){
            this.cocktailService.editCocktail(this.cocktail._id, this.cocktailForm.value)
        } else {
            this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
        }
        this.router.navigate(['..'], {relativeTo: this.activatedRoute})
    }
}
