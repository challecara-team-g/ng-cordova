import { Component, OnInit, Input } from '@angular/core';
import { TaskContent } from '../task-content';
import { Observable } from 'rxjs';
import { TasksService } from '../tasks.service';
import { TaskeditComponent } from '../taskedit/taskedit.component';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {
  @Input() task: TaskContent;
  @Input() dayOfWeek: Date;
  profileUrl: Observable<string | null>;
  constructor(private taskService: TasksService,private navi: OnsNavigator) { }

  ngOnInit() {
    this.profileUrl = this.taskService.downlodeFile(this.task.icon_id);
  }

  pushtaskedit(task){
    var data=task;
    this.navi.nativeElement.pushPage(TaskeditComponent,{data});
  }
}
