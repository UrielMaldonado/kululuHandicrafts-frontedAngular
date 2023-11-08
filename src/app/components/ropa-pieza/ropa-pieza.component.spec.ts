import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaPiezaComponent } from './ropa-pieza.component';

describe('RopaPiezaComponent', () => {
  let component: RopaPiezaComponent;
  let fixture: ComponentFixture<RopaPiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopaPiezaComponent]
    });
    fixture = TestBed.createComponent(RopaPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
