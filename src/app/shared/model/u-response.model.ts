import { Moment } from 'moment';

export interface IUResponse {
  id?: number;
  message?: any;
  createdBy?: string;
  createdDate?: Moment;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  idRequestId?: number;
  idUserId?: number;
  idUserGender?: string;
  idResponseId?: number;
  idResponseMessage?: string;
  childResponses?: [any];
}

export class UResponse implements IUResponse {
  constructor(
    public id?: number,
    public message?: any,
    public createdBy?: string,
    public createdDate?: Moment,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Moment,
    public idRequestId?: number,
    public idUserId?: number,
    public idUserGender?: string,
    public idResponseId?: number,
    public idResponseMessage?: string,
    public childResponses?: [any]
  ) {}
}
