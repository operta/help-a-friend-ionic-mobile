import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(null, (err: HttpErrorResponse) => {
                if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('api/account'))))) {
                    // this.toastr.error('error');
                } else {
                    // this.toastr.error('Not authenticated!');
                    this.router.navigateByUrl('/');
                }
            }),
        );
    }
}
