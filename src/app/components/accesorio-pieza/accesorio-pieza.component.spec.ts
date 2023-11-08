import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioPiezaComponent } from './accesorio-pieza.component';

describe('AccesorioPiezaComponent', () => {
  let component: AccesorioPiezaComponent;
  let fixture: ComponentFixture<AccesorioPiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesorioPiezaComponent]
    });
    fixture = TestBed.createComponent(AccesorioPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
