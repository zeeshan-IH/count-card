import { TestBed } from '@angular/core/testing';

import { CardCountService } from './card-count.service';

describe('CardCountService', () => {
  let service: CardCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
