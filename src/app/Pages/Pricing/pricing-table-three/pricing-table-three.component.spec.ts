import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTableThreeComponent } from './pricing-table-three.component';

describe('PricingTableThreeComponent', () => {
  let component: PricingTableThreeComponent;
  let fixture: ComponentFixture<PricingTableThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTableThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTableThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
