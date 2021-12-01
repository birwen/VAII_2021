import { TestBed } from '@angular/core/testing';

import { BlogComponentService } from './blog-component.service';

describe('BlogComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogComponentService = TestBed.get(BlogComponentService);
    expect(service).toBeTruthy();
  });
});
