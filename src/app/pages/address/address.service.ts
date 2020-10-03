import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {from, Observable, of} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {Location} from '../../shared/model/location.model';
import {SERVER_API_URL} from '../../app.constants';

@Injectable()
export class AddressService {
    constructor(private http: HttpClient,
                private storage: Storage) {
    }

    private resourceUrl = SERVER_API_URL + 'api/locations';

    loadUserLocations(): Observable<HttpResponse<any>> {
        return from(this.storage.get('userId'))
            .pipe(
                switchMap((userId: number) => {
                    return this.http.get<Location[]>(`${this.resourceUrl}/user/${userId}`, {observe: 'response'});
                }),
                catchError((err) => of(new HttpResponse({body: []})))
            );
    }

    setDefaultForCurrentUser(locationId: number): Observable<HttpResponse<any>> {
        return this.http.put<any>(`${this.resourceUrl}/user/${locationId}`, null, {observe: 'response'});
    }

    create(location: Location): Observable<HttpResponse<Location>> {
        return from(this.storage.get('userId'))
            .pipe(
                switchMap((userId: number) => {
                    const userLocation = {
                        ...location,
                        userId
                    };
                    return this.http.post<Location>(this.resourceUrl, userLocation, {observe: 'response'});
                })
            );
    }

    find(id: number): Observable<HttpResponse<Location>> {
        return this.http.get<Location>(`${this.resourceUrl}/${id}`, {observe: 'response'});
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.resourceUrl}/${id}`, {observe: 'response'});
    }

}
