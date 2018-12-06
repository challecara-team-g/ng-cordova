import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplusComponent } from './teamplus.component';

describe('TeamplusComponent', () => {
  let component: TeamplusComponent;
  let fixture: ComponentFixture<TeamplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
