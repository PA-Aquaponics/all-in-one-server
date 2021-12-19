import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainviewComponent} from "./mainview/mainview.component";
import {LogviewComponent} from "./logview/logview.component";
import {ErrorViewComponent} from "./errorview/error-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: MainviewComponent},
  { path: 'logging', component: LogviewComponent},

  // Wild Card route 404
  { path: '**', component: ErrorViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
