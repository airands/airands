import { TestBed, async, inject } from '@angular/core/testing';

import { IncompleteAddressGuard } from './incomplete-address.guard';

describe('IncompleteAddressGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncompleteAddressGuard]
    });
  });

  it('should ...', inject([IncompleteAddressGuard], (guard: IncompleteAddressGuard) => {
    expect(guard).toBeTruthy();
  }));
});
