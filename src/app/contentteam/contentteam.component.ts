import { Component, OnInit } from '@angular/core';
import { TeamplusComponent } from '../teamplus/teamplus.component';

@Component({
  selector: 'ons-page[app-contentteam]',
  templateUrl: './contentteam.component.html',
  styleUrls: ['./contentteam.component.scss']
})
export class ContentteamComponent implements OnInit {

  page=TeamplusComponent;
  constructor() { }

  ngOnInit() {
  }

}
