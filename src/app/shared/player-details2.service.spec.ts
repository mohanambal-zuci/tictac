import { TestBed } from '@angular/core/testing';

import { PlayerDetails2Service } from './player-details2.service';

describe('PlayerDetails2Service', () => {
  let service: PlayerDetails2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerDetails2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
