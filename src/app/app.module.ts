// Onsen UI Styling and Icons
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TaskplusComponent } from './taskplus/taskplus.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TaskplusComponent
  ],
  imports: [
    OnsenModule, // has BrowserModule internally
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    HomeComponent,
    MenuComponent,
    TaskplusComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// if (module['hot']) module['hot'].accept();
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));