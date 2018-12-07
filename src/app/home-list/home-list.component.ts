import { Component, OnInit, Input } from '@angular/core';
import { TaskContent } from '../task-content';
import { WEEK } from '../mock-weeks';
import { MenuService } from '../menu.service';
import { OnsNavigator } from 'ngx-onsenui';
import { TaskplusComponent } from '../taskplus/taskplus.component';
import { TaskeditComponent } from '../taskedit/taskedit.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  @Input() dayOfWeek: number;
  tasks: Observable<TaskContent[]>;
  weeks=WEEK;
  constructor(private menuService: MenuService,private navi: OnsNavigator, private db: AngularFirestore) {
    this.tasks = db
    .collection<TaskContent>('tasks', ref => {
      return ref
    })
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(action => {
        // 日付をセットしたコメントを返す
        const data = action.payload.doc.data();
        console.log(data);
        const task_data = new TaskContent(
          data.day_of_week,data.title,data.title,data.icon_id,
          data.assign_user,data.comment
        );
        task_data.setId(data.id);
        return task_data;
      })));
  }

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
