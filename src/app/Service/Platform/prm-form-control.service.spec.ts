import { TestBed } from '@angular/core/testing';

import { PrmFormControlService } from './prm-form-control.service';

describe('PrmFormControlService', () => {
  let service: PrmFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrmFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
