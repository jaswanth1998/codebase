import { TestBed } from '@angular/core/testing';

import { QuillInitializeService } from './quill-initialize.service';

describe('QuillInitializeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuillInitializeService = TestBed.get(QuillInitializeService);
    expect(service).toBeTruthy();
  });
});
