import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyeriaPiezaComponent } from './joyeria-pieza.component';

describe('JoyeriaPiezaComponent', () => {
  let component: JoyeriaPiezaComponent;
  let fixture: ComponentFixture<JoyeriaPiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyeriaPiezaComponent]
    });
    fixture = TestBed.createComponent(JoyeriaPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
