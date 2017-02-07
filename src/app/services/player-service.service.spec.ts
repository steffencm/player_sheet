/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerServiceService } from './player-service.service';

describe('PlayerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerServiceService]
    });
  });

  it('should ...', inject([PlayerServiceService], (service: PlayerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
