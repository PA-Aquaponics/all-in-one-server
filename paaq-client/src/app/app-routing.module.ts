import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainviewComponent} from "./mainview/mainview.component";
import {LogviewComponent} from "./logview/logview.component";
import {ErrorviewComponent} from "./errorview/errorview.component";

const routes: Routes = [
  { path: 'error', component: ErrorviewComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: MainviewComponent},
  { path: 'logging', component: LogviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
