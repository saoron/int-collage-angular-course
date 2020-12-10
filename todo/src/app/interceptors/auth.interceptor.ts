import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../service/users.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private users: UsersService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUserToken = this.users.currentUserToken;
    if (currentUserToken) {
      request = request.clone({
        setHeaders: {
          token: `${currentUserToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
