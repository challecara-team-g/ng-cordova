import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Params, OnsNavigator } from 'ngx-onsenui';
import { TasksService } from '../tasks.service';
import { TaskContent } from '../task-content';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'ons-page[app-taskplus]',
  templateUrl: './taskplus.component.html',
  styleUrls: ['./taskplus.component.scss']
})
export class TaskplusComponent implements OnInit {
  date = new Date();
  dayOfWeek = this.date.getDay();
  task_title = "";
  task_assign_user = "";
  task_comment = "";
  create_task: any;

  constructor(private navi: OnsNavigator,
    private params: Params, private taskService: TasksService, private db: AngularFirestore) { }
  // constructor(@Inject(forwardRef(() => AppComponent)) privcate app : AppComponent) { }

  pop() {
    this.navi.nativeElement.popPage();
    this.addTask()
  }
  ngOnInit() {
  }
  addTask(){
    this.create_task = new TaskContent(
      this.dayOfWeek,this.task_title,
      this.task_comment,"",this.task_assign_user,this.task_comment
    );
    this.create_task.setId(this.taskService.addTask(this.create_task));
  }

}
