import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly _menu = new ReplaySubject<boolean>(1);
  private readonly _loadComponent = new ReplaySubject<any>(1);

  constructor() { }

  get menu$() {
    return this._menu.asObservable();
  }

  openMenu() {
    this._menu.next(true);
  }

  closeMenu() {
    this._menu.next(false);
  }

  get loadComponent$() {
    return this._loadComponent.asObservable();
  }

  loadComponent(component: any) {
    this._loadComponent.next(component);
  }

}