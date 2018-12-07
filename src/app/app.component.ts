import { Component, ViewChild, EventEmitter, OnDestroy, OnInit } from '@angular/core';

import {MenuComponent} from './menu/menu.component';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { ContentComponent } from './content/content.component';
import { OnsSplitterContent, OnsSplitterSide } from 'ngx-onsenui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();

  sidePage = MenuComponent;
  contentPage = ContentComponent;

  @ViewChild('side') side: OnsSplitterSide;
  @ViewChild('content') content: OnsSplitterContent;

  constructor(private menuService: MenuService) {
   }

  ngOnInit() {
    this.menuService.menu$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(menu => {
      if (menu) {
        this.side.nativeElement.open();
      } else {
        this.side.nativeElement.close();
      }
    });

    this.menuService.loadComponent$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(component => {
      this.content.nativeElement.load(component);
      this.menuService.closeMenu();
    });
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }

}