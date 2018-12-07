import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { HomeComponent } from '../home/home.component';
import { ContentComponent } from '../content/content.component';
import { OnsNavigator } from 'ngx-onsenui';
import { MypageeditComponent } from '../mypageedit/mypageedit.component';
import { TaskeditComponent } from '../taskedit/taskedit.component';
import { Observable } from 'rxjs';
import { TaskContent } from '../task-content';


@Component({
  selector: 'ons-page[app-my-page]',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
  export class MyPageComponent implements OnInit {

  home=HomeComponent;
  tasks: Observable<TaskContent[]>;

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
