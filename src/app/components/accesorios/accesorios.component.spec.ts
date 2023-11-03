import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosComponent } from './accesorios.component';

describe('AccesoriosComponent', () => {
  let component: AccesoriosComponent;
  let fixture: ComponentFixture<AccesoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoriosComponent]
    });
    fixture = TestBed.createComponent(AccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
