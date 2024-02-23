import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSelected]',
  standalone: true
})
export class SelectedDirective implements OnChanges{

    @Input() appSelected: boolean = false;
    @HostBinding('style.backgroundColor') private backgroundColor?: string;
    @HostBinding('style.fontWeight') private fontWeight?: string;
    @HostBinding('style.color') private color?: string;

    ngOnChanges() {
        if (this.appSelected) {
            this.backgroundColor = 'var(--primary)';
            this.fontWeight = 'bold';
            this.color = 'white';
        }else {
            this.backgroundColor = 'white';
            this.fontWeight = 'normal';
            this.color = 'var(--text-regular)';
        }
    }
  constructor() { }

}
