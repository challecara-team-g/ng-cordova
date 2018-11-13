import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'ons-page[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }

  ngOnInit() {
  }

}
