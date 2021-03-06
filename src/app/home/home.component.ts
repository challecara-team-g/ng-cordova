import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { WEEK } from '../mock-weeks';
import { MenuService } from '../menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { TaskplusComponent } from '../taskplus/taskplus.component';
import { TaskeditComponent } from '../taskedit/taskedit.component';

@Component({
  selector: 'ons-page[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weeks=WEEK;
  date = new Date();
  dayOfWeek = this.date.getDay();
  constructor(private menuService: MenuService,private navi: OnsNavigator) {}

  openMenu() {
    this.menuService.openMenu();
  }

  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }
  pushtaskplus(dayOfWeek) {
    var data = dayOfWeek
    this.navi.nativeElement.pushPage(TaskplusComponent,{data});
  }
  pushtaskedit(task){
    var data=task;
    this.navi.nativeElement.pushPage(TaskeditComponent,{data});
  }
  ngOnInit() {
  }

}
