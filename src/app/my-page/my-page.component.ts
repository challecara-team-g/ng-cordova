import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { HomeComponent } from '../home/home.component';
import { ContentComponent } from '../content/content.component';
import { TASKCONTENT } from '../mock-taskcontents';
import { OnsNavigator } from 'ngx-onsenui';
import { MypageeditComponent } from '../mypageedit/mypageedit.component';
import { TaskeditComponent } from '../taskedit/taskedit.component';


@Component({
  selector: 'ons-page[app-my-page]',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
  export class MyPageComponent implements OnInit {
  
  home=HomeComponent;
  tasks=TASKCONTENT;
  
  constructor(private menuService: MenuService,private navi: OnsNavigator) { }

  ngOnInit() {
  }
  pushedit() {
    this.navi.nativeElement.pushPage(MypageeditComponent);
  }
  pushtaskedit(task){
    var data=task;
    this.navi.nativeElement.pushPage(TaskeditComponent,{data});
  }
  load(component: any) {
    this.menuService.loadComponent(ContentComponent);
  }
}
