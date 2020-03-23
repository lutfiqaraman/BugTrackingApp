import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { IssuesComponent } from './components/issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
