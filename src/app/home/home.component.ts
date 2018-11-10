import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { WEEK } from '../mock-weeks';
import { TASKCONTENT } from '../mock-taskcontents';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weeks=WEEK;
  tasks=TASKCONTENT;
  
  constructor(private menuService: MenuService) { }
  openMenu() {
    this.menuService.open();
  }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }

  ngOnInit() {
  }

}
