import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyPageComponent } from '../my-page/my-page.component';
import {MenuService} from '../menu.service';
import { ContentComponent } from '../content/content.component';
import { USERS } from '../mock-users'
import { ContentteamComponent } from '../contentteam/contentteam.component';
import { ContentmypageComponent } from '../contentmypage/contentmypage.component';
import { Observable } from 'rxjs';
import { TaskContent } from '../task-content';

@Component({
  selector: 'ons-page[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  home=ContentComponent;
  mypage=ContentmypageComponent;
  tasks: Observable<TaskContent[]>;
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
