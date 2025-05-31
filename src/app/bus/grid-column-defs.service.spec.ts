import { TestBed } from '@angular/core/testing';

import { GridColumnDefsService } from './grid-column-defs.service';

describe('GridColumnDefsService', () => {
  let service: GridColumnDefsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridColumnDefsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
