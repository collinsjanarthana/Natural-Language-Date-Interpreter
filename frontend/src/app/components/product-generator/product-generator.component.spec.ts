import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGeneratorComponent } from './product-generator.component';

describe('ProductGeneratorComponent', () => {
  let component: ProductGeneratorComponent;
  let fixture: ComponentFixture<ProductGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
