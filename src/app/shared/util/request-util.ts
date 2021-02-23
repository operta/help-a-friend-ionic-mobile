import {HttpParams} from '@angular/common/http';
import * as moment from 'moment';

export interface Pagination {
    page: number;
    size: number;
    sort: string[];
}

export interface Search {
    query: string;
}

export interface SearchWithPagination extends Search, Pagination {
}

export const createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();

    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });

        if (req.sort) {
            req.sort.forEach((val: string) => {
                options = options.append('sort', val);
            });
        }
    }

    return options;
};

export const convertObjectLogDates = (item: any): any => {

    item.createdDate = item.createdDate ? moment(item.createdDate) : undefined;
    item.lastModifiedDate = item.lastModifiedDate ? moment(item.lastModifiedDate) : undefined;

    return item;
};
