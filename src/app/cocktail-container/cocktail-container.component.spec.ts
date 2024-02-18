import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailContainerComponent } from './cocktail-container.component';

describe('CocktailContainerComponent', () => {
  let component: CocktailContainerComponent;
  let fixture: ComponentFixture<CocktailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
