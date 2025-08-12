import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTableFourComponent } from './pricing-table-four.component';

describe('PricingTableFourComponent', () => {
  let component: PricingTableFourComponent;
  let fixture: ComponentFixture<PricingTableFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTableFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTableFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
