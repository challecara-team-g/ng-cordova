import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentteamComponent } from './contentteam.component';

describe('ContentteamComponent', () => {
  let component: ContentteamComponent;
  let fixture: ComponentFixture<ContentteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
