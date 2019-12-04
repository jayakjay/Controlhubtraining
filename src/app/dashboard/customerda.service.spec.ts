import { TestBed } from '@angular/core/testing';

import { CustomerdaService } from './customerda.service';

describe('CustomerdaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerdaService = TestBed.get(CustomerdaService);
    expect(service).toBeTruthy();
  });
});
