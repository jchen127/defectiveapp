import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppheadComponent } from './apphead/apphead.component';
import { AppSearchComponent } from './app-search/app-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheadComponent,
    AppSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
