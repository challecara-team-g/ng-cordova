import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { WEEK } from '../mock-weeks';
import { TASKCONTENT } from '../mock-taskcontents';
import { MenuService } from '../menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { TaskplusComponent } from '../taskplus/taskplus.component';

@Component({
  selector: 'ons-page[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weeks=WEEK;
  tasks=TASKCONTENT;
  
  constructor(private menuService: MenuService,private navi: OnsNavigator) { }
  openMenu() {
    this.menuService.open();
  }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }
  push() {
    this.navi.nativeElement.pushPage(TaskplusComponent);
  }
  ngOnInit() {
  }

}
