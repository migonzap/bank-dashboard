import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: ':id', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
