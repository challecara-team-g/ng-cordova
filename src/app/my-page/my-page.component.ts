import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { HomeComponent } from '../home/home.component';
import { ContentComponent } from '../content/content.component';
import { TASKCONTENT } from '../mock-taskcontents';


@Component({
  selector: 'ons-page[app-my-page]',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
  export class MyPageComponent implements OnInit {
  
  home=HomeComponent;
  tasks=TASKCONTENT;
  
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }
  load(component: any) {
    this.menuService.loadComponent(ContentComponent);
  }
}
