import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-mypage]',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

  constructor(private navi: OnsNavigator,
    private params: Params) { }

  pop() {
    this.navi.nativeElement.popPage();
  }
  
  ngOnInit() {
  }

}
