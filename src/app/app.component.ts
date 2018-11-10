import { Component, ViewChild } from '@angular/core';
import { OnsSplitterContent, OnsSplitterSide } from 'ngx-onsenui';
import { HomeComponent } from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {TaskplusComponent} from './taskplus/taskplus.component';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  menu = MenuComponent;
  home = HomeComponent;
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
  }
  
  
  
}
