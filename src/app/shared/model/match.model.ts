import { Moment } from 'moment';

export interface IMatch {
  id?: number;
  createdBy?: string;
  createdDate?: Moment;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  idHelperId?: number;
  idReceiverId?: number;
}

export class Match implements IMatch {
  constructor(
    public id?: number,
    public createdBy?: string,
    public createdDate?: Moment,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Moment,
    public idHelperId?: number,
    public idReceiverId?: number
  ) {}
}
