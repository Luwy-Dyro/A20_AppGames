import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTableTwoComponent } from './pricing-table-two.component';

describe('PricingTableTwoComponent', () => {
  let component: PricingTableTwoComponent;
  let fixture: ComponentFixture<PricingTableTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTableTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
