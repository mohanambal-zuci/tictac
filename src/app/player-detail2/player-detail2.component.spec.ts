import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetail2Component } from './player-detail2.component';

describe('PlayerDetail2Component', () => {
  let component: PlayerDetail2Component;
  let fixture: ComponentFixture<PlayerDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerDetail2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
