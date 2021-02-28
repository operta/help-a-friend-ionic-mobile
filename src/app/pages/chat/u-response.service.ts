import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../app.constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import * as moment from 'moment';
import {IUResponse} from '../../shared/model/u-response.model';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Storage} from '@ionic/storage';

type EntityResponseType = HttpResponse<IUResponse>;
type EntityArrayResponseType = HttpResponse<IUResponse[]>;

@Injectable()
export class UResponseService {
    public resourceUrl = SERVER_API_URL + 'api/u-responses';

    constructor(protected http: HttpClient, private storage: Storage) {
    }

    create(message: string, channel: string): Observable<EntityResponseType> {


        return from(this.storage.get('userId'))
            .pipe(
                switchMap((value) => {

                    const response: IUResponse = {
                        message: message,
                        idUserId: +value,
                        idRequestId: +channel
                    };
                    const responseWithDate = this.convertDateFromClient(response);

                    return this.http
                        .post<IUResponse>(SERVER_API_URL + 'api/chat/message', responseWithDate,
                            {
                                observe: 'response',
                                params: {
                                    'channel-name': channel
                                }
                            })
                        .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
                })
            );
    }

    loadResponsesOfRequest(requestId: number): Observable<EntityArrayResponseType> {
        return this.http
            .get<IUResponse[]>(`${this.resourceUrl}/request/${requestId}`, {observe: 'response'})
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }
    // update(uRequest: IUResponse): Observable<EntityResponseType> {
    //     const copy = this.convertDateFromClient(uRequest);
    //     return this.http
    //         .put<IUResponse>(this.resourceUrl, copy, {observe: 'response'})
    //         .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    // }

    protected convertDateFromClient(item: IUResponse): IUResponse {
        const copy: IUResponse = Object.assign({}, item, {
            createdDate: item.createdDate && item.createdDate.isValid() ? item.createdDate.toJSON() : undefined,
            lastModifiedDate: item.lastModifiedDate && item.lastModifiedDate.isValid() ? item.lastModifiedDate.toJSON() : undefined
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
            res.body.forEach((item: IUResponse) => {
                item.createdDate = item.createdDate ? moment(item.createdDate) : undefined;
                item.lastModifiedDate = item.lastModifiedDate ? moment(item.lastModifiedDate) : undefined;
            });
        }
        return res;
    }

}
