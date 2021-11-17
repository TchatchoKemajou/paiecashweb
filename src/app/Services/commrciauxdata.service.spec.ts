import { TestBed } from '@angular/core/testing';

import { CommrciauxdataService } from './commrciauxdata.service';

describe('CommrciauxdataService', () => {
  let service: CommrciauxdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommrciauxdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
