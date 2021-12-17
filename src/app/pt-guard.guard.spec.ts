import { TestBed } from '@angular/core/testing';

import { PtGuardGuard } from './pt-guard.guard';

describe('PtGuardGuard', () => {
  let guard: PtGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PtGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
