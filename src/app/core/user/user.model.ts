export interface IUser {
    id?: any;
    firstName?: string;
    lastName?: string;
    email?: string;
    activated?: boolean;
    langKey?: string;
    authorities?: string[];
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    password?: string;
    gender?: string;
    phoneNumber?: string;
    age?: number;
    isHelper?: boolean;
    isHelpSeeker?: boolean;
    login?: string;
    idLocation?: number;
}

export class User implements IUser {
    constructor(
        public id?: any,
        public login?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public activated?: boolean,
        public langKey?: string,
        public authorities?: string[],
        public createdBy?: string,
        public createdDate?: Date,
        public lastModifiedBy?: string,
        public lastModifiedDate?: Date,
        public password?: string,
        public gender?: string,
        public phoneNumber?: string,
        public age?: number,
        public isHelper?: boolean,
        public isHelpSeeker?: boolean,
        public idLocation?: number
    ) {
    }
}
