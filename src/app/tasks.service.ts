import { Injectable } from '@angular/core';
import { TaskContent } from './task-content';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  item: Observable<TaskContent[]>;
  public content = '';

  constructor(private db: AngularFirestore) {
    this.item = db
    .collection<TaskContent>('tasks', ref => {
      return ref.orderBy('date', 'asc')
    })
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(action => {
        // 日付をセットしたコメントを返す
        const data = action.payload.doc.data() as TaskContent;
        const task_data = new TaskContent(
          data.day_of_week,
          data.title,
          data.detail,
          data.icon_id,
          data.assign_user,data.comment
        );
        task_data.setData(data.update_at);
        return task_data;
      })));
  }
  // 新しいタスクを追加
  addTask(task: TaskContent): string {
    if (task) {
      this.db.collection('tasks').add(new TaskContent(
        task.day_of_week,task.title,task.detail,
        task.icon_id,task.assign_user,task.comment
      ).deserialize()).then(function(docRef) {
        return docRef.id
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        return error
    });
    }
    return "None"
  }
}
