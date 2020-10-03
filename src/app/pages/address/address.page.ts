import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {AddressService} from './address.service';
import {map} from 'rxjs/operators';
import {Location} from '../../shared/model/location.model';
import {ModalController, ToastController} from '@ionic/angular';
import {AddAddressPage} from './add-address/add-address.page';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-address',
    templateUrl: './address.page.html',
    styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
    type: string;
    title: string;
    locations$: Observable<Location[]>;
    modal: any;
    defaultLocationId;
    selectedLocationId;
    categoryId: number;
    isDefault = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private addressService: AddressService,
                private toastr: ToastController,
                private storage: Storage,
                private modalService: ModalController) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params && params.type) {
                console.log(params);
                this.type = params.type;
                if (this.type === 'pickup') {
                    this.title = 'Set Pickup Location';
                    this.categoryId = params.categoryId;
                }
                if (this.type === 'delivery') {
                    this.title = 'Set Delivery Location';
                    this.categoryId = params.categoryId;
                }
                if (this.type === 'default') {
                    this.isDefault = true;
                    this.title = 'Set Default location';
                }
            }
        });
        this.locations$ = this.loadUserLocations();
        this.loadDefaultLocation();
    }


    async presentAddAddress() {
        this.modal = await this.modalService.create({
            component: AddAddressPage,
            cssClass: 'address-modal'
        });
        this.modal.onDidDismiss().then((data) => {
            if (data.data.saved) {
                this.locations$ = this.loadUserLocations();
            }
        });
        return await this.modal.present();
    }

    private loadUserLocations(): Observable<Location[]> {
        return this.addressService.loadUserLocations().pipe(map(res => res.body));
    }

    removeItem(id: number) {
        this.addressService.delete(id).subscribe(
            () => {
                this.locations$ = this.loadUserLocations();
                this.showToast('Location deleted', 'success');
            },
            (error) => this.showToast(error.detail, 'danger')
        );
    }

    async showToast(message, type) {
        const toast = await this.toastr.create({message, color: type, duration: 5000});
        toast.present();
    }

    private loadDefaultLocation() {
        this.storage.get('defaultLocation').then((value) => {
            this.defaultLocationId = value;
            this.selectedLocationId = this.defaultLocationId;
        });

    }

    setLocation(event: any) {
        const locationId = event.detail.value;
        if (this.type === 'default') {
            this.addressService.setDefaultForCurrentUser(locationId).subscribe(
                () => {
                    this.defaultLocationId = locationId;
                    this.storage.set('defaultLocation', this.defaultLocationId);
                    this.showToast('Default location set', 'success');
                }, (error) => this.showToast(error.detail, 'danger')
            );
        } else {
            this.selectedLocationId = locationId;
        }

    }

    goCreateRequest() {
        this.router.navigate(['/create-request/create-request'],
            {
                queryParams: {
                    categoryId: this.categoryId,
                    locationId: this.selectedLocationId
                }
            });
    }


}
