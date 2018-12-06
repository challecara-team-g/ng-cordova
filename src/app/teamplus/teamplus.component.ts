import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { ContentComponent } from '../content/content.component';
import { HomeComponent } from '../home/home.component';
import { TeamcreateComponent } from '../teamcreate/teamcreate.component';


@Component({
  selector: 'ons-page[app-teamplus]',
  templateUrl: './teamplus.component.html',
  styleUrls: ['./teamplus.component.scss']
})
export class TeamplusComponent implements OnInit {
  
  constructor(private menuService: MenuService,private navi: OnsNavigator) { }
  home=HomeComponent;
  ngOnInit() {
  }
  push() {
    this.navi.nativeElement.pushPage(TeamcreateComponent);
  }
  load(component: any) {
    this.menuService.loadComponent(ContentComponent);
  }
}
