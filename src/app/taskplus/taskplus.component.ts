import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Params, OnsNavigator } from 'ngx-onsenui';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-taskplus',
  templateUrl: './taskplus.component.html',
  styleUrls: ['./taskplus.component.scss']
})
export class TaskplusComponent implements OnInit {

  constructor(private navi: OnsNavigator,
    private params: Params) { }
  // constructor(@Inject(forwardRef(() => AppComponent)) privcate app : AppComponent) { }

  pop() {
    this.navi.nativeElement.popPage();
  }
  ngOnInit() {
  }

}
