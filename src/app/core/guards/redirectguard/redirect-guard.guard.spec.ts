import { TestBed } from '@angular/core/testing';

import { RedirectGuardGuard } from './redirect-guard.guard';

describe('RedirectGuardGuard', () => {
  let guard: RedirectGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
