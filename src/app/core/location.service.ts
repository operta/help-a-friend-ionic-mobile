import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ILocation, Location} from "../shared/model/location.model";
import {SERVER_API_URL} from "../app.constants";


type EntityResponseType = HttpResponse<ILocation>;

@Injectable({providedIn: 'root'})
export class LocationService {

    private currentLocation$: BehaviorSubject<ILocation> = new BehaviorSubject<ILocation>(null);
    private currentLocation = null;

    public resourceUrl = SERVER_API_URL + 'api/locations';
    private mapQuestLink = 'http://open.mapquestapi.com/geocoding/v1/address?key=Iv5HTx887jbrfenIOtBGHjUTFTfnPerZ&location=';
    private locationIqLink = 'https://eu1.locationiq.com/v1/search.php?key=622543a8dbf59c&format=json&q=';
    private openCageLink = 'https://api.opencagedata.com/geocode/v1/json?key=89a1cb2b07484909ab3ce4aecf94c94b&pretty=1&q=';


    constructor(private http: HttpClient) {
    }

    getLocation(): Observable<ILocation> {
        return this.currentLocation$.asObservable();
    }

    getSavedLocation(): Location {
        return this.currentLocation;
    }


    setLocation(idLocation) {
        this.find(idLocation).subscribe((res) => {
            if (res) {
                this.currentLocation = res.body;
                this.currentLocation$.next(this.currentLocation);
            }
        });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ILocation>(`${this.resourceUrl}/${id}`, {observe: 'response'});
    }

    create(location: ILocation): Observable<EntityResponseType> {
        return this.http.post<ILocation>(this.resourceUrl, location, { observe: 'response' });
    }

    createForCurrentUser(location: ILocation): Observable<EntityResponseType> {
        this.currentLocation = location;
        this.currentLocation$.next(this.currentLocation);
        return this.http.post<ILocation>(`${this.resourceUrl}/user`, location, {observe: 'response'});
    }

    requestLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const currentLocation = new Location(null, position.coords.latitude, position.coords.longitude);
                this.currentLocation$.next(currentLocation);
                this.currentLocation = currentLocation;
            }, () => {
                this.currentLocation$.next(this.currentLocation);
            });
        } else {
            this.currentLocation$.next(this.currentLocation);
        }
    }


    geocode(city: string, address: string, streetNo: number): Observable<any> {
        return this.http.get(`${this.locationIqLink}${city},${address} ${streetNo}`);
    }


}
