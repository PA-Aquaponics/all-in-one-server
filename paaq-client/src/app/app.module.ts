import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MainviewComponent } from './mainview/mainview.component';
import { LogviewComponent } from './logview/logview.component';
import { HttpClientModule} from "@angular/common/http";
import { SystemCardComponent } from './mainview/system-card/system-card.component';
import { TankInfoComponent } from './mainview/system-card/tank-info/tank-info.component';
import {FlexModule, GridModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import { ErrorViewComponent } from './errorview/error-view.component';
import {httpInterceptorProviders} from "./http-interceptors";
import { DetailviewComponent } from './detailview/detailview.component';
import { TankCardComponent } from './detailview/tank-card/tank-card.component';
import { NewSensorDialogComponent } from './new-sensor-dialog/new-sensor-dialog.component';
import { DialogContentComponent } from './new-sensor-dialog/dialog-content/dialog-content.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainviewComponent,
    LogviewComponent,
    SystemCardComponent,
    TankInfoComponent,
    ErrorViewComponent,
    DetailviewComponent,
    TankCardComponent,
    NewSensorDialogComponent,
    DialogContentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    FlexModule,
    GridModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    httpInterceptorProviders,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
