import { Component, OnInit } from '@angular/core';
import { Params, OnsNavigator } from 'ngx-onsenui';
import { Observable } from 'rxjs';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'ons-page[app-taskedit]',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.scss']
})
export class TaskeditComponent implements OnInit {
  profileUrl: Observable<string>;
  constructor(private navi: OnsNavigator,
    private params: Params, private taskService: TasksService) {
      this.profileUrl = taskService.downlodeFile(params.data.icon_id);
      console.log(params.data);
    }
  // constructor(@Inject(forwardRef(() => AppComponent)) privcate app : AppComponent) { }

  pop() {
    this.navi.nativeElement.popPage();
  }
  ngOnInit() {
  }

}
