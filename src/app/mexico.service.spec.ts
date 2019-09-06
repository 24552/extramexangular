import { TestBed } from '@angular/core/testing';

import { MexicoService } from './mexico.service';

describe('MexicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MexicoService = TestBed.get(MexicoService);
    expect(service).toBeTruthy();
  });
});
