import { TestBed } from '@angular/core/testing';

import { EmployeeservieService } from './employeeservie.service';

describe('EmployeeservieService', () => {
  let service: EmployeeservieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeservieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
