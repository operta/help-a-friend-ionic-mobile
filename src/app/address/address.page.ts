import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';
import {AddressService} from './address.service';
import {map} from 'rxjs/operators';
import {Location} from '../shared/model/location.model';
import {ModalController} from '@ionic/angular';
import {AddAddressPage} from './add-address/add-address.page';

@Component({
    selector: 'app-address',
    templateUrl: './address.page.html',
    styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

    type = 'my';
    title: any;
    locations$: Observable<Location[]>;
    modal: any;

    constructor(private route: ActivatedRoute, private addressService: AddressService,
                private modalService: ModalController) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.type = params.type;
        });
        this.setRoute();
        this.locations$ = this.loadUserLocations();
    }


    private setRoute() {
        if (this.type === 'delivery') {
            this.title = 'Deliver Location';
        }
        if (this.type === 'my') {
            this.title = 'My Locations';
        }
    }

    async presentAddAddress() {
        this.modal = await this.modalService.create({
            component: AddAddressPage,
            cssClass: 'address-modal'
        });
        this.modal.onWillDismiss().then((data) => {
            if (data.data.saved) {
                this.locations$ = this.loadUserLocations();
            }
        });
        return await this.modal.present();
    }

    private loadUserLocations(): Observable<Location[]> {
        return this.addressService.loadUserLocations().pipe(map(res => res.body));
        // get user id
    }


}
