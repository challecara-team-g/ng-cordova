import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyPageComponent } from '../my-page/my-page.component';
import {MenuService} from '../menu.service';
import { TASKCONTENT } from '../mock-taskcontents';
import { ContentComponent } from '../content/content.component';
import { USERS } from '../mock-users'
import { ContentteamComponent } from '../contentteam/contentteam.component';

@Component({
  selector: 'ons-page[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  home=ContentComponent;
  mypage=MyPageComponent;
  tasks=TASKCONTENT;
  users=USERS;
  addgroup=ContentteamComponent;
  constructor(private menuService: MenuService) { }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }

  ngOnInit() {
  }

  load(component: any) {
    this.menuService.loadComponent(component);
  }
}
