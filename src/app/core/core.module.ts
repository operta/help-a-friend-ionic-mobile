import {NgModule, LOCALE_ID} from '@angular/core';
import {DatePipe, registerLocaleData} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import locale from '@angular/common/locales/en';
import {AuthInterceptor} from '../blocks/interceptor/auth.interceptor';
import {AuthExpiredInterceptor} from '../blocks/interceptor/auth-expired.interceptor';
import {ErrorHandlerInterceptor} from '../blocks/interceptor/errorhandler.interceptor';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
        },

    ]
})
export class HelpCoreModule {
    constructor() {
        registerLocaleData(locale);
    }
}
