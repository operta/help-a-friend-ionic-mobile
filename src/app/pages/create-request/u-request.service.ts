import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import * as moment from 'moment';

import {IURequest} from '../../shared/model/u-request.model';
import {SERVER_API_URL} from '../../app.constants';
import {createRequestOption} from '../../shared/util/request-util';
import {Storage} from '@ionic/storage';

type EntityResponseType = HttpResponse<IURequest>;
type EntityArrayResponseType = HttpResponse<IURequest[]>;

@Injectable()
export class URequestService {
    public resourceUrl = SERVER_API_URL + 'api/u-requests';

    constructor(protected http: HttpClient,
                private storage: Storage) {
    }

    create(uRequest: IURequest): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(uRequest);
        return from(this.storage.get('userId'))
            .pipe(
                switchMap((value) => {
                    const copyWithUserId = {
                        ...copy,
                        idUserId: value
                    };
                    return this.http
                        .post<IURequest>(this.resourceUrl, copyWithUserId, {observe: 'response'})
                        .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
                })
            );
    }

    update(uRequest: IURequest): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(uRequest);
        return this.http
            .put<IURequest>(this.resourceUrl, copy, {observe: 'response'})
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<IURequest> {
        return this.http
            .get<IURequest>(`${this.resourceUrl}/${id}`, {observe: 'response'})
            .pipe(
                map((res: EntityResponseType) => this.convertDateFromServer(res)),
                map((res: EntityResponseType) => {
                    return res.body;
                })
            );
    }

    findByUser(): Observable<EntityArrayResponseType> {
        return this.http
            .get<IURequest[]>(`${this.resourceUrl}/user`, {observe: 'response'})
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    findByResponses(): Observable<EntityArrayResponseType> {
        return this.http
            .get<IURequest[]>(`${this.resourceUrl}/responses`, {observe: 'response'})
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IURequest[]>(this.resourceUrl, {params: options, observe: 'response'})
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${this.resourceUrl}/${id}`, {observe: 'response'});
    }

    hasRequestHelpers(requestId: number): Observable<boolean> {
        return this.http.get<boolean>(`${this.resourceUrl}/${requestId}/helpers`);
    }

    protected convertDateFromClient(uRequest: IURequest): IURequest {
        const copy: IURequest = Object.assign({}, uRequest, {
            createdDate: uRequest.createdDate && uRequest.createdDate.isValid() ? uRequest.createdDate.toJSON() : undefined,
            lastModifiedDate: uRequest.lastModifiedDate && uRequest.lastModifiedDate.isValid() ? uRequest.lastModifiedDate.toJSON() : undefined
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.createdDate = res.body.createdDate ? moment(res.body.createdDate) : undefined;
            res.body.lastModifiedDate = res.body.lastModifiedDate ? moment(res.body.lastModifiedDate) : undefined;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((uRequest: IURequest) => {
                uRequest.createdDate = uRequest.createdDate ? moment(uRequest.createdDate) : undefined;
                uRequest.lastModifiedDate = uRequest.lastModifiedDate ? moment(uRequest.lastModifiedDate) : undefined;
            });
        }
        return res;
    }
}
