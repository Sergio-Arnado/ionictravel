import { TestBed } from '@angular/core/testing';

import { OpenmapService } from './openmap.service';

describe('OpenmapService', () => {
  let service: OpenmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
