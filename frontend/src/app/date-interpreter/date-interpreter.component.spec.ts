import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInterpreterComponent } from './date-interpreter.component';

describe('DateInterpreterComponent', () => {
  let component: DateInterpreterComponent;
  let fixture: ComponentFixture<DateInterpreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInterpreterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
