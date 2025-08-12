import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameServer1Component } from './game-server-1.component';

describe('GameServer1Component', () => {
  let component: GameServer1Component;
  let fixture: ComponentFixture<GameServer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameServer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameServer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
