import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {Storage} from '@ionic/storage';
import {switchMap} from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private storage: Storage) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url || (request.url.startsWith('http') && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
            return next.handle(request);
        }
        return from(this.storage.get('authenticationToken'))
            .pipe(
                switchMap(
                    (token) => {
                        request = request.clone({
                            setHeaders: {
                                Authorization: 'Bearer ' + token
                            }
                        });

                        return next.handle(request);
                    }
                )
            );
    }
}
