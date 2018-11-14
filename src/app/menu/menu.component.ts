import { Component, OnInit} from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { MypageComponent } from '../mypage/mypage.component';

@Component({
  selector: 'ons-page[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private navi: OnsNavigator) { }
  // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }

  push() {
    this.navi.nativeElement.pushPage(MypageComponent);
  }

  ngOnInit() {
  }

}
