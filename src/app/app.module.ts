import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import {FormsModule} from '@angular/forms';
import { TabletAppComponent } from './tablet-app/tablet-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CounterComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    SideBarComponent,
    TopBarComponent,
    ProjectsComponent,
    TabletAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
