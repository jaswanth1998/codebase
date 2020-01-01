import { TestBed } from '@angular/core/testing';

import { GiveItService } from './give-it.service';

describe('GiveItService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiveItService = TestBed.get(GiveItService);
    expect(service).toBeTruthy();
  });
});
