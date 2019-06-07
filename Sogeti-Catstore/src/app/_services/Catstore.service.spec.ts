/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatstoreService } from './Catstore.service';

describe('Service: Catstore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatstoreService]
    });
  });

  it('should ...', inject([CatstoreService], (service: CatstoreService) => {
    expect(service).toBeTruthy();
  }));
});
