import { TestBed, async, inject } from '@angular/core/testing';

import { IncompleteProfileGuard } from './incomplete-profile.guard';

describe('IncompleteProfileGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncompleteProfileGuard]
    });
  });

  it('should ...', inject([IncompleteProfileGuard], (guard: IncompleteProfileGuard) => {
    expect(guard).toBeTruthy();
  }));
});
