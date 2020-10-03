import {Component} from '@angular/core';
import {URequestService} from '../create-request/u-request.service';
import {Observable} from 'rxjs';
import {URequest} from '../../shared/model/u-request.model';
import {map} from 'rxjs/operators';
import {ViewWillEnter} from '@ionic/angular';

@Component({
    selector: 'app-myorders',
    templateUrl: './myrequests.page.html',
    styleUrls: ['./myrequests.page.scss'],
})
export class MyRequestsPage implements ViewWillEnter {
    requests$: Observable<URequest[]>;

    constructor(private requestService: URequestService) {
    }

    ionViewWillEnter(): void {
        this.loadUserRequests();
    }


    private loadUserRequests() {
        this.requests$ = this.requestService.findByUser().pipe(map(res => {
            console.log(res);
            return res.body;
        }));
    }


}
