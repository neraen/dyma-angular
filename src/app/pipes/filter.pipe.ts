import { Pipe, PipeTransform } from '@angular/core';
import {Cocktail} from "../shared/interfaces/cocktail.interface";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Cocktail[],  search: string ): Cocktail[] {
    return value.filter(cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase()))
  }

}
