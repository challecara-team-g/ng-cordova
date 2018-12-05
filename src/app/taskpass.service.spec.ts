import { TestBed } from '@angular/core/testing';

import { TaskpassService } from './taskpass.service';

describe('TaskpassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskpassService = TestBed.get(TaskpassService);
    expect(service).toBeTruthy();
  });
});
