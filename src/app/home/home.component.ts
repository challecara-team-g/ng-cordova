import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { GoodsPassService } from '../common.service';
import { WEEK } from '../mock-weeks';
import { TASKCONTENT } from '../mock-taskcontents';
import { MenuService } from '../menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { TaskplusComponent } from '../taskplus/taskplus.component';
import { TaskContent } from '../task-content';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    this.menuService.openMenu();
  }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }
  push() {
    this.navi.nativeElement.pushPage(TaskplusComponent);
  }
  ngOnInit() {
  }

}

export class TaskInfo{
  taskinfo:FormGroup;

  taskcontent = new TaskContent;

  private isUpdate:boolean=false;

  constructor(fb:FormBuilder,private goodsPassService: GoodsPassService){
    if(goodsPassService.getRefleshFlg()){
      goodsPassService.refleshGoods();
      this.isUpdate=false;
    }else{
      goodsPassService.setRefleshFlg(true);
      this.isUpdate=false;
    }
    if(goodsPassService.getGoods()!== undefined){
      this.taskcontent = goodsPassService.getGoods();
    }

    // this.taskinfo=fb.group({

    // })
  }
  goodsPassSet(){
    this.goodsPassService.setGoods(this.taskcontent);
  }
  
}