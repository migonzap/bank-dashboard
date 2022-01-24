import { TestBed } from '@angular/core/testing';

import { RestDataService } from './rest-data.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RestDataService', () => {
  let service: RestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
