import { TestBed } from '@angular/core/testing';

import { ModuleTypesServiceService } from './module-types-service.service';

describe('ModuleTypesServiceService', () => {
  let service: ModuleTypesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleTypesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
