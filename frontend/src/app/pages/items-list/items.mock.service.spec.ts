import { TestBed } from '@angular/core/testing';

import { ItemsMockService } from './items.mock.service';

describe('ItemsMockService', () => {
  let service: ItemsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsMockService],
    });
    service = TestBed.inject(ItemsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
