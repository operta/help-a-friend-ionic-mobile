export interface ILocation {
  id?: number;
  latitude?: number;
  longitude?: number;
  city?: string;
  address?: string;
  streetNumber?: number;
  floor?: number;
  door?: string;
  userId?: number;
}

export class Location implements ILocation {
  constructor(
    public id?: number,
    public latitude?: number,
    public longitude?: number,
    public city?: string,
    public address?: string,
    public streetNumber?: number,
    public floor?: number,
    public door?: string,
    public userId?: number
  ) {}
}
