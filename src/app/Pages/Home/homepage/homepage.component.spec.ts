import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage7Component } from './homepage.component';

describe('Homepage7Component', () => {
  let component: Homepage7Component;
  let fixture: ComponentFixture<Homepage7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepage7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
