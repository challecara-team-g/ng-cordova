import { Component, OnInit, Input } from '@angular/core';
import { TaskContent } from '../task-content';
import { WEEK } from '../mock-weeks';
import { TASKCONTENT } from '../mock-taskcontents';
import { MenuService } from '../menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { TaskplusComponent } from '../taskplus/taskplus.component';
import { TaskeditComponent } from '../taskedit/taskedit.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  @Input() dayOfWeek: number;
  tasks=TASKCONTENT;
  weeks=WEEK;
  constructor(private menuService: MenuService,private navi: OnsNavigator) {}

  pushtaskplus() {
    this.navi.nativeElement.pushPage(TaskplusComponent);
  }
  pushtaskedit(task){
    var data=task;
    this.navi.nativeElement.pushPage(TaskeditComponent,{data});
  }
  ngOnInit() {
  }

}
