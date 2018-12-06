import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmypageComponent } from './contentmypage.component';

describe('ContentmypageComponent', () => {
  let component: ContentmypageComponent;
  let fixture: ComponentFixture<ContentmypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentmypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentmypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
