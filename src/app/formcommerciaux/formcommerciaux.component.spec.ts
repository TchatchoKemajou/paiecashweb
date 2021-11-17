import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcommerciauxComponent } from './formcommerciaux.component';

describe('FormcommerciauxComponent', () => {
  let component: FormcommerciauxComponent;
  let fixture: ComponentFixture<FormcommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcommerciauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
