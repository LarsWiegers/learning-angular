import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { AppComponent } from './app.component';
import { ButtonComponent  as AppButton } from './button/button.component';
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
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    AppButton,
    CounterComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    SideBarComponent,
    TopBarComponent,
    ProjectsComponent,
    TabletAppComponent,
    DashboardCardComponent,
    DashboardGridComponent,
    DashboardGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
