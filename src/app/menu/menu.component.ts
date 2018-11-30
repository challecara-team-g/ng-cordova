import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyPageComponent } from '../my-page/my-page.component';
import {MenuService} from '../menu.service';
import { TASKCONTENT } from '../mock-taskcontents';

@Component({
  selector: 'ons-page[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mypage=MyPageComponent;
  tasks=TASKCONTENT;

  constructor(private menuService: MenuService) { }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }

  ngOnInit() {
  }

  load(component: any) {
    this.menuService.loadComponent(component);
  }
}
