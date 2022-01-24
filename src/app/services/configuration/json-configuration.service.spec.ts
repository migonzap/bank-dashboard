import { TestBed } from '@angular/core/testing';

import { JsonConfigurationService } from './json-configuration.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('JsonConfigurationService', () => {
  let service: JsonConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(JsonConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
