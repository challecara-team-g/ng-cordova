import { Component, OnInit } from '@angular/core';
import { MyPageComponent } from '../my-page/my-page.component';

@Component({
  selector: 'ons-page[app-contentmypage]',
  templateUrl: './contentmypage.component.html',
  styleUrls: ['./contentmypage.component.scss']
})
export class ContentmypageComponent implements OnInit {

  page = MyPageComponent;
  constructor() { }

  ngOnInit() {
  }

}
