import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './angularmaterial/material.module';

import { IssuesComponent } from './components/issues/issues.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueComponent } from './components/issues/issue/issue.component';
import { IssueslistComponent } from './components/issues/issueslist/issueslist.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueComponent,
    IssueslistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
