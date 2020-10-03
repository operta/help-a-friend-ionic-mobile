import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, ReplaySubject, of} from 'rxjs';
import {shareReplay, tap, catchError} from 'rxjs/operators';
import {SERVER_API_URL} from '../../app.constants';
import {Account} from '../user/account.model';
import {IUser} from '../user/user.model';
import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';

@Injectable({providedIn: 'root'})
export class AccountService {
    private userIdentity: Account | null = null;
    private authenticationState = new ReplaySubject<Account | null>(1);
    private accountCache$?: Observable<Account | null>;

    constructor(
        private storage: Storage,
        private http: HttpClient,
        private injector: Injector
    ) {
    }

    resetFinish(key: string, newPassword: string): Observable<{}> {
        return this.http.post(SERVER_API_URL + 'api/account/reset-password/finish', {key, newPassword});
    }

    reset(mail: string): Observable<{}> {
        return this.http.post(SERVER_API_URL + 'api/account/reset-password/init', mail);
    }

    activate(key: string): Observable<{}> {
        return this.http.get(SERVER_API_URL + 'api/activate', {
            params: new HttpParams().set('key', key)
        });
    }

    save(account: Account): Observable<{}> {
        return this.http.post(SERVER_API_URL + 'api/account', account);
    }

    register(account: IUser): Observable<{}> {
        return this.http.post(SERVER_API_URL + 'api/register', account);
    }

    authenticate(identity: Account | null): void {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }

    hasAnyAuthority(authorities: string[] | string): boolean {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
    }

    identity(force?: boolean): Observable<Account | any> {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(
                catchError(() => {
                    console.log('error');
                    return of(null);
                }),
                tap((account: Account | null) => {
                    this.storage.set('userId', account.id)
                        .then(() => {
                            this.storage.set('isHelper', account.isHelper).then(() => {
                                this.storage.set('isHelpSeeker', account.isHelpSeeker).then(() => {
                                    this.storage.set('defaultLocation', account.idLocation).then(() => {
                                        this.authenticate(account);

                                        // After retrieve the account info, the language will be changed to
                                        // the user's preferred language configured in the account setting
                                        // TODO do langKey storing
                                        if (account && account.langKey) {
                                            const langKey = account.langKey;
                                            const translateService = this.injector.get(TranslateService);
                                            translateService.use(langKey);
                                        }
                                    });
                                });
                            });
                        });
                }),
                shareReplay()
            );
        }
        return this.accountCache$;
    }

    isAuthenticated(): boolean {
        return this.userIdentity !== null;
    }

    getAuthenticationState(): Observable<Account | null> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): string {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    }

    private fetch(): Observable<Account> {
        return this.http.get<Account>(SERVER_API_URL + 'api/account');
    }

}
