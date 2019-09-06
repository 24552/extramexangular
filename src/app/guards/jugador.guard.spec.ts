import { TestBed, async, inject } from '@angular/core/testing';

import { JugadorGuard } from './jugador.guard';

describe('JugadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadorGuard]
    });
  });

  it('should ...', inject([JugadorGuard], (guard: JugadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
