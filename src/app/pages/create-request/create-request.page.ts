import {Component, OnInit} from '@angular/core';
import {URequest} from '../../shared/model/u-request.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {FormBuilder, Validators} from '@angular/forms';
import {URequestService} from './u-request.service';

@Component({
    selector: 'app-create-request',
    templateUrl: './create-request.page.html',
    styleUrls: ['./create-request.page.scss'],
})
export class CreateRequestPage implements OnInit {
    newRequest: URequest;

    requestForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', []],
    });

    constructor(private route: ActivatedRoute,
                private toastr: ToastController,
                private requestService: URequestService,
                private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params && params.categoryId && params.locationId) {
                this.initRequest(params.categoryId, params.locationId);
            } else {
                this.showToast('Request invalid, please try again', 'danger');
                this.router.navigateByUrl('/create-request');
            }
        });
    }

    private initRequest(categoryId, locationId) {
        this.newRequest = {
            ...new URequest(),
            isFinished: false,
            isAnonimous: false,
            isArchived: false,
            idCategoryId: categoryId,
            idLocationId: locationId
        };
    }

    createRequest() {
        this.newRequest = {
            ...this.newRequest,
            name: this.requestForm.get(['name'])!.value,
            description: this.requestForm.get(['description']).value
        };
        this.requestService.create(this.newRequest).subscribe(
            (response) => {
                const createdRequest = response.body;
                this.router.navigateByUrl('/matching/' + createdRequest.id);
                this.showToast('Request created succesfully', 'success');
            }, (error) => this.showToast(error.detail, 'danger')
        );
    }

    private async showToast(message, type) {
        const toast = await this.toastr.create({message, color: type, duration: 5000});
        toast.present();
    }


}
