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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JsonConfigurationService } from "./services/configuration/json-configuration.service";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DataService } from "./services/data/data.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ChartComponent } from './components/chart/chart.component';
import { ConfigurationService } from "./services/configuration/configuration.service";
import { RestDataService } from "./services/data/rest-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PageNotFoundComponent,
    DashboardComponent,
    CardComponent,
    TableComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: ConfigurationService, useClass: JsonConfigurationService },
    { provide: DataService, useClass: RestDataService },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
