import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Login} from '../login/login.model';
import {SERVER_API_URL} from '../../app.constants';
import {Storage} from '@ionic/storage';

type JwtToken = {
    id_token: string;
};

@Injectable({providedIn: 'root'})
export class AuthServerProvider {
    constructor(private http: HttpClient, private storage: Storage) {
    }

    async getToken(): Promise<string> {
        return this.storage.get('authenticationToken');
    }

    login(credentials: Login): Observable<void> {
        return this.http
            .post<JwtToken>(SERVER_API_URL + 'api/authenticate', credentials)
            .pipe(switchMap(response => this.authenticateSuccess(response)));
    }


    logout(): Observable<void> {
        return from(this.storage.clear());
    }

    private authenticateSuccess(response: any): Observable<any> {
        const jwt = response.id_token;
        return from(this.storage.set('authenticationToken', jwt));
    }
}
