import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Cocktail} from "../../shared/interfaces/cocktail.interface";
import {SelectedDirective} from "../../shared/directives/selected.directive";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "../../pipes/filter.pipe";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
    imports: [CommonModule, SelectedDirective, RouterLink, RouterLinkActive, FormsModule, FilterPipe],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
    @Input() public cocktails?: Cocktail[];
    public search: string = '';
}
