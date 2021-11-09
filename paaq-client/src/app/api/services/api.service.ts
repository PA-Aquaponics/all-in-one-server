/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Sensor } from '../models/sensor';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sensorsGet
   */
  static readonly SensorsGetPath = '/sensors';

  /**
   * get a list of sensors
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sensorsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sensorsGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Sensor>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SensorsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Sensor>>;
      })
    );
  }

  /**
   * get a list of sensors
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sensorsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sensorsGet(params?: {
  }): Observable<Array<Sensor>> {

    return this.sensorsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Sensor>>) => r.body as Array<Sensor>)
    );
  }

  /**
   * Path part for operation addSensor
   */
  static readonly AddSensorPath = '/sensors';

  /**
   * create new sensor in the database
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSensor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSensor$Response(params?: {
    body?: Sensor
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AddSensorPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * create new sensor in the database
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addSensor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSensor(params?: {
    body?: Sensor
  }): Observable<void> {

    return this.addSensor$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation changeSensor
   */
  static readonly ChangeSensorPath = '/sensors/{entityId}/';

  /**
   * change property of sensor
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeSensor()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeSensor$Response(params: {
    entityId: any;
    sensor?: Sensor;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ChangeSensorPath, 'put');
    if (params) {
      rb.path('entityId', params.entityId, {});
      rb.query('sensor', params.sensor, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * change property of sensor
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changeSensor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeSensor(params: {
    entityId: any;
    sensor?: Sensor;
  }): Observable<void> {

    return this.changeSensor$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
