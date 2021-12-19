import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {EnsureHttpsInterceptor} from "./ensure-https-interceptor";


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true}
]
