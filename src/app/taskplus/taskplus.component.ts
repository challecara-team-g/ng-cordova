import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Params, OnsNavigator } from 'ngx-onsenui';
import { TasksService } from '../tasks.service';
import { TaskContent } from '../task-content';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { strict } from 'assert';

@Component({
  selector: 'ons-page[app-taskplus]',
  templateUrl: './taskplus.component.html',
  styleUrls: ['./taskplus.component.scss']
})
export class TaskplusComponent implements OnInit {
  task_title = "";
  task_assign_user = "";
  task_comment = "";
  create_task: any;
  dayOfWeek=this.params.data;
  profileUrl: Observable<string | null>;
  filename: String= 'task-icon/noimage.png';

  constructor(private navi: OnsNavigator,
    private params: Params, private taskService: TasksService, private storage: AngularFireStorage) {
      this.profileUrl = taskService.downlodeFile(this.filename);
    }
  // constructor(@Inject(forwardRef(() => AppComponent)) privcate app : AppComponent) { }
  pop() {
    this.navi.nativeElement.popPage();
    this.addTask()
  }
  ngOnInit() {
  }
  addTask(){
    this.create_task = new TaskContent(
      this.params.data,this.task_title,
      this.task_comment,this.filename,this.task_assign_user,this.task_comment
    );
    this.create_task.setId(this.taskService.addTask(this.create_task));
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'task-icon/' + file.name;
    const ref = this.storage.ref(filePath)
          .put(file).then(result => {
            this.filename = filePath;
            this.profileUrl = this.taskService.downlodeFile(filePath);
         })
         .catch(err => console.log(err));
  }
}
