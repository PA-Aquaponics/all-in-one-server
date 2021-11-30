import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import {
  ApiModule,
  Configuration,
  ConfigurationParameters
} from "./api/v1";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SensorsComponent } from './sensors/sensors.component';

export function  apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // put custom configuration parameters here
    // e.g. basePath: environment.basePath,
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [ApiModule.forRoot(apiConfigFactory)],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
