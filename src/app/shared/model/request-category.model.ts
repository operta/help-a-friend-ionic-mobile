export interface IRequestCategory {
  id?: number;
  name?: string;
  icon?: string;
}

export class RequestCategory implements IRequestCategory {
  constructor(public id?: number, public name?: string, public icon?: string) {}
}
