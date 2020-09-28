import {IRequestCategory} from "../../shared/model/request-category.model";
import {SERVER_API_URL} from "../../app.constants";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {createRequestOption} from "../../shared/util/request-util";
import {Injectable} from "@angular/core";

type EntityResponseType = HttpResponse<IRequestCategory>;
type EntityArrayResponseType = HttpResponse<IRequestCategory[]>;

@Injectable({ providedIn: 'root' })
export class RequestCategoryService {
    public resourceUrl = SERVER_API_URL + 'api/request-categories';

    constructor(protected http: HttpClient) {}

    create(requestCategory: IRequestCategory): Observable<EntityResponseType> {
        return this.http.post<IRequestCategory>(this.resourceUrl, requestCategory, { observe: 'response' });
    }

    update(requestCategory: IRequestCategory): Observable<EntityResponseType> {
        return this.http.put<IRequestCategory>(this.resourceUrl, requestCategory, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IRequestCategory>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IRequestCategory[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
