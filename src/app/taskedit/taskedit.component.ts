import { Component, OnInit } from '@angular/core';
import { Params, OnsNavigator } from 'ngx-onsenui';
@Component({
  selector: 'ons-page[app-taskedit]',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.scss']
})
export class TaskeditComponent implements OnInit {
  constructor(private navi: OnsNavigator,
    private params: Params) {
      console.log(params.data);
    }
  // constructor(@Inject(forwardRef(() => AppComponent)) privcate app : AppComponent) { }

  pop() {
    this.navi.nativeElement.popPage();
  }
  ngOnInit() {
  }

}
