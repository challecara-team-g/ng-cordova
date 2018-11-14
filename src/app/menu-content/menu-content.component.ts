import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'ons-page[app-menu-content]',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {

  page = MenuComponent;
  constructor() { }
  
  ngOnInit() {
  }

}
