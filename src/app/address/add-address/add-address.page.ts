import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {FormBuilder, Validators} from '@angular/forms';
import {Location} from '../../shared/model/location.model';
import {AddressService} from '../address.service';

@Component({
    selector: 'app-add-address',
    templateUrl: './add-address.page.html',
    styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

    addressForm = this.fb.group({
        address: ['', Validators.required],
        streetNumber: ['', Validators.required],
        city: ['', Validators.required],
        floor: [''],
        door: [''],
        latitude: [0],
        longitude: [0]
    });

    constructor(private modalCtrl: ModalController,
                private locationService: AddressService,
                private toastr: ToastController,
                private fb: FormBuilder) {
    }

    ngOnInit() {
    }

    close(saved) {
        this.modalCtrl.dismiss({
            saved: saved
        });
    }

    addAddress() {
        const address = {
            ...new Location(),
            address: this.addressForm.get(['address'])!.value,
            streetNumber: this.addressForm.get(['streetNumber'])!.value,
            city: this.addressForm.get(['city'])!.value,
            floor: this.addressForm.get(['floor'])?.value,
            door: this.addressForm.get(['door'])?.value,
        };
        this.locationService.create(address).subscribe(
            () => {
                this.showToast('New address added', 'success');
            }, (error) => {
                this.showToast(error.message, 'danger');
            });
        this.close(true);
    }

    async showToast(message, type) {
        const toast = await this.toastr.create({message, color: type, duration: 2000});
        toast.present()
    }

}
