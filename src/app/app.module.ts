// Onsen UI Styling and Icons
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TaskplusComponent } from './taskplus/taskplus.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MenuService } from './menu.service';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { MyPageComponent } from './my-page/my-page.component';
import { TaskeditComponent } from './taskedit/taskedit.component';
import { ContentteamComponent } from './contentteam/contentteam.component';
import { TeamplusComponent } from './teamplus/teamplus.component';
import { TeamcreateComponent } from './teamcreate/teamcreate.component';
import { ContentmypageComponent } from './contentmypage/contentmypage.component';
import { MypageeditComponent } from './mypageedit/mypageedit.component';
import { HomeListComponent } from './home-list/home-list.component';
import { environment } from './environments/environment';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TaskplusComponent,
    ContentComponent,
    MyPageComponent,
    TaskeditComponent,
    ContentteamComponent,
    TeamplusComponent,
    TeamcreateComponent,
    ContentmypageComponent,
    MypageeditComponent,
    HomeListComponent
  ],
  imports: [
    OnsenModule, // has BrowserModule internally
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  entryComponents: [
    HomeComponent,
    MenuComponent,
    TaskplusComponent,
    ContentComponent,
    MyPageComponent,
    TaskeditComponent,
    ContentteamComponent,
    TeamplusComponent,
    TeamcreateComponent,
    ContentmypageComponent,
    MypageeditComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    MenuService,
    TasksService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
// if (module['hot']) module['hot'].accept();
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));