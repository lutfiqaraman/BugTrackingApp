import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuesComponent } from './components/issues/issues.component';
import { IssueComponent } from './components/issues/issue/issue.component';
import { IssueslistComponent } from './components/issues/issueslist/issueslist.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';

import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent =
[
  IssuesComponent,
  IssuesComponent,
  IssueslistComponent,
  NavbarComponent,
  HomeComponent,
  RegisterComponent,
  LoginComponent
];
