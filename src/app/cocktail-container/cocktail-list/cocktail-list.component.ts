import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Cocktail} from "../../interface/cocktail.interface";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
    @Input() public cocktails: Cocktail[] = [];
    @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<number>();

    public selectCocktail(index: number): void {
        this.changeCocktail.emit(index);
    }
}
