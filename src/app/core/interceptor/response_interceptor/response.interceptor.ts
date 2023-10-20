import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api/api.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private toaster: ToastrService, private api: ApiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log('req', request);
    let msg = '';
    return next.handle(request).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          if (request.method !== 'GET') {
            console.log(res);
            
            if (res.status !== 404  ) {
              this.toaster.success('Message Success!', msg, {
                positionClass: 'toast-bottom-right',
                progressBar: true,
              });
              msg = res.statusText;
            }
          }
        }
      })
    );
  }
}
