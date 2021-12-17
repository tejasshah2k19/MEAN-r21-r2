import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = '123456';
    console.log("http request called..") 
    if(request.method.toLowerCase() == "post"){
      console.log(" POST Found")
      if(request.body instanceof FormData){
        console.log("form data done")
        request =  request.clone({
          body: request.body.append("authtoken", "123321")
        })
      }else{
        console.log("FormData not found");
           let body = request.body;
           body["authtoke"]="3343234234"
      }
    }
    return next.handle(request);
    //return next.handle(request.clone({ setHeaders: { API_KEY } }));
  }
}
