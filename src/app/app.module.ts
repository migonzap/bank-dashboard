import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { JsonConfigurationService } from "./services/configuration/json-configuration.service";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DataService } from "./services/data/data.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChartComponent } from './components/chart/chart.component';
import { ConfigurationService } from "./services/configuration/configuration.service";
import { RestDataService } from "./services/data/rest-data.service";
import { LastCardComponent } from './components/last-card/last-card.component';
import { MinCardComponent } from './components/min-card/min-card.component';
import { MaxCardComponent } from './components/max-card/max-card.component';
import { AvgCardComponent } from './components/avg-card/avg-card.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    DashboardComponent,
    CardComponent,
    ChartComponent,
    LastCardComponent,
    MinCardComponent,
    MaxCardComponent,
    AvgCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: ConfigurationService, useClass: JsonConfigurationService },
    { provide: DataService, useClass: RestDataService }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
