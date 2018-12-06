import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { ContentmypageComponent } from '../contentmypage/contentmypage.component';
import { MyPageComponent } from '../my-page/my-page.component';

@Component({
  selector: 'ons-page[app-mypageedit]',
  templateUrl: './mypageedit.component.html',
  styleUrls: ['./mypageedit.component.scss']
})
export class MypageeditComponent implements OnInit {
 
  constructor(private navi: OnsNavigator,
    private params: Params) { }

  ngOnInit() {
  }
  pop() {
    this.navi.nativeElement.popPage();
  }
  
}
