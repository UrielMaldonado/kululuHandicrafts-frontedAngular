import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouComponent } from './abou.component';

describe('AbouComponent', () => {
  let component: AbouComponent;
  let fixture: ComponentFixture<AbouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouComponent]
    });
    fixture = TestBed.createComponent(AbouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
