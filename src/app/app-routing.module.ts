import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElementSummaryComponent} from "./components/element-summary/element-summary.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: ElementSummaryComponent },
  { path: ':id', component: ElementSummaryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
