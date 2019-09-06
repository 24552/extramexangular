import { TestBed } from '@angular/core/testing';

import { SConexionService } from './sconexion.service';

describe('SConexionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SConexionService = TestBed.get(SConexionService);
    expect(service).toBeTruthy();
  });
});
