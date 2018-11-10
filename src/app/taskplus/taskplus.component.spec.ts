import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskplusComponent } from './taskplus.component';

describe('TaskplusComponent', () => {
  let component: TaskplusComponent;
  let fixture: ComponentFixture<TaskplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
