import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameServer2Component } from './game-server-2.component';

describe('GameServer2Component', () => {
  let component: GameServer2Component;
  let fixture: ComponentFixture<GameServer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameServer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameServer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
