import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageeditComponent } from './mypageedit.component';

describe('MypageeditComponent', () => {
  let component: MypageeditComponent;
  let fixture: ComponentFixture<MypageeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypageeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
