import {Component, OnInit} from '@angular/core';
import {URequestService} from '../create-request/u-request.service';
import {Observable} from 'rxjs';
import {URequest} from '../../shared/model/u-request.model';
import {map} from 'rxjs/operators';
import {ViewWillEnter} from '@ionic/angular';

@Component({
    selector: 'app-allrequests',
    templateUrl: './allrequests.page.html',
    styleUrls: ['./allrequests.page.scss'],
})
export class AllrequestsPage implements OnInit, ViewWillEnter {
    requests$: Observable<URequest[]>;
    selectedCategoryId: number;

    // requests: URequest[] = [];

    constructor(private requestService: URequestService) {
    }

    ngOnInit() {
        this.loadAllActiveRequests();
    }

    ionViewWillEnter(): void {
        this.loadAllActiveRequests();
    }

    private loadAllActiveRequests(req?) {
        this.requests$ = this.requestService.query(req)
            .pipe(map(res => res.body));
        // .subscribe(
        //     (requests: URequest[]) => this.requests = requests);

    }

    private filterRequests() {
        const req = {
            category: this.selectedCategoryId ? this.selectedCategoryId : '',
            // radius: this.selectedRadius ? this.selectedRadius : '',
            // latitude: this.userLocation ? this.userLocation.latitude : '',
            // longitude: this.userLocation ? this.userLocation.longitude : '',
        };
        this.loadAllActiveRequests(req);
    }

    selectedCategory(value) {
        this.selectedCategoryId = value;
        this.filterRequests();
    }

    // TODO add location filter


    // TODO infinite scroll for active requests


}
