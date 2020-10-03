import {Moment} from 'moment';
import {Location} from '../../shared/model/location.model';

export interface IURequest {
    id?: number;
    name?: string;
    description?: any;
    isFinished?: boolean;
    isArchived?: boolean;
    isAnonimous?: boolean;
    createdBy?: string;
    createdDate?: Moment;
    lastModifiedBy?: string;
    lastModifiedDate?: Moment;
    idUserId?: number;
    idCategoryId?: number;
    idLocationId?: number;
    idUserGender?: string;
    idCategoryName?: string;
    idLocation?: Location;
}

export class URequest implements IURequest {
    constructor(
        public id?: number,
        public name?: string,
        public description?: any,
        public isFinished?: boolean,
        public isArchived?: boolean,
        public isAnonimous?: boolean,
        public createdBy?: string,
        public createdDate?: Moment,
        public lastModifiedBy?: string,
        public lastModifiedDate?: Moment,
        public idUserId?: number,
        public idUserGender?: string,
        public idCategoryId?: number,
        public idCategoryName?: string,
        public idLocationId?: number,
        public idLocation?: Location
    ) {
        this.isFinished = this.isFinished || false;
        this.isArchived = this.isArchived || false;
        this.isAnonimous = this.isAnonimous || false;
    }
}
