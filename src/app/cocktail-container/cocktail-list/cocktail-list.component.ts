import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {SelectedDirective} from "../../shared/directives/selected.directive";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
    imports: [CommonModule, SelectedDirective],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
    @Input() public cocktails: Cocktail[] = [];
    @Input() public selectedCocktail?: Cocktail;
    @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<number>();

    public selectCocktail(index: number): void {
        this.changeCocktail.emit(index);
    }
}
