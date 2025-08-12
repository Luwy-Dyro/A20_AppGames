import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onepage1Component } from './onepage-1.component';

describe('Onepage1Component', () => {
  let component: Onepage1Component;
  let fixture: ComponentFixture<Onepage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onepage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
