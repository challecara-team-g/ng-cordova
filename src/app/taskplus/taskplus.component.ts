import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Params, OnsNavigator } from 'ngx-onsenui';
import { HomeComponent } from '../home/home.component';
import { GoodsPassService } from '../common.service';
import { TASKCONTENT } from '../mock-taskcontents';
import { TaskContent } from '../task-content';

@Component({
  selector: 'ons-page[app-taskplus]',
  templateUrl: './taskplus.component.html',
  styleUrls: ['./taskplus.component.scss']
})
export class TaskplusComponent implements OnInit {

  constructor(private navi: OnsNavigator,
    private params: Params) {}
  // constructor(@Inject(forwardRef(() => AppComponent)) privcate app : AppComponent) { }

  pop() {
    this.navi.nativeElement.popPage();
  }

  ngOnInit() {
  }

}

export class TaskInfo2 {
  
  taskinfo:TaskContent;

  constructor(private goodsPassService:GoodsPassService){
    this.taskinfo=goodsPassService.getGoods();
  }
}
