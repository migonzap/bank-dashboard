import { TestBed } from '@angular/core/testing';

import { JsonConfigurationService } from './json-configuration.service';

describe('JsonConfigurationService', () => {
  let service: JsonConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
