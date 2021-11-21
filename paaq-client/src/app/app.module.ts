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
import {HttpClientModule} from "@angular/common/http";

export function  apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // put custom configuration parameters here
    // e.g. basePath: environment.basePath,
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [ApiModule.forRoot(apiConfigFactory)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
