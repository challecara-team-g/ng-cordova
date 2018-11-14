import { Component, ViewChild } from '@angular/core';

import {MenuComponent} from './menu/menu.component';

import { MenuService } from './menu.service';
import { ContentComponent } from './content/content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  menu = MenuContentComponent;
  content = ContentComponent;
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
  }
  
  
  
}
