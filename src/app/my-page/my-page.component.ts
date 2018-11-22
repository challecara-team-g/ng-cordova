import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'ons-page[app-my-page]',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
  export class MyPageComponent implements OnInit {
  
  home=HomeComponent;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }
  load(component: any) {
    this.menuService.loadComponent(component);
  }
}
