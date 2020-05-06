import { TestBed, async, inject } from '@angular/core/testing';

import { IncompleteNameGuard } from './incomplete-name.guard';

describe('IncompleteNameGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncompleteNameGuard]
    });
  });

  it('should ...', inject([IncompleteNameGuard], (guard: IncompleteNameGuard) => {
    expect(guard).toBeTruthy();
  }));
});
