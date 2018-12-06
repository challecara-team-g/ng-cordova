import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { ContentComponent } from '../content/content.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'ons-page[app-teamcreate]',
  templateUrl: './teamcreate.component.html',
  styleUrls: ['./teamcreate.component.scss']
})
export class TeamcreateComponent implements OnInit {
  home=HomeComponent;
  constructor(private navi: OnsNavigator,
    private params: Params) { }

  ngOnInit() {
  }
  pop() {
    this.navi.nativeElement.popPage();
  }
  push(component:any) {
    this.navi.nativeElement.resetToPage(ContentComponent);
  }
}
