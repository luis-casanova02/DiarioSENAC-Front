import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistrosComponent } from './card-registros.component';

describe('CardRegistrosComponent', () => {
  let component: CardRegistrosComponent;
  let fixture: ComponentFixture<CardRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRegistrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
