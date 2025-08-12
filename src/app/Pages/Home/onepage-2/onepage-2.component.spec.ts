import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onepage2Component } from './onepage-2.component';

describe('Onepage2Component', () => {
  let component: Onepage2Component;
  let fixture: ComponentFixture<Onepage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onepage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onepage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
