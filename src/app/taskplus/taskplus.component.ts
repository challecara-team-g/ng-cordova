import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-taskplus',
  templateUrl: './taskplus.component.html',
  styleUrls: ['./taskplus.component.scss']
})
export class TaskplusComponent implements OnInit {

  constructor() { }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }

  ngOnInit() {
  }

}
