import { Injectable } from '@angular/core';
import { TaskContent } from './task-content';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Observable<TaskContent[]>;
  public content = '';
  public uploadResult: any = null;
  uploadPercent: Observable<number>;
  profileUrl: Observable<string | null>;
  filename: String;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.tasks = db
    .collection<TaskContent>('tasks', ref => {
      return ref
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
  downlodeFile(fileName): Observable<string | null>{
    const filepath = fileName;
    const ref = this.storage.ref(filepath);
    this.profileUrl = ref.getDownloadURL();
    console.log(this.profileUrl);
    return this.profileUrl;
  }
}
