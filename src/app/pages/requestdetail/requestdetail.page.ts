import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {URequest} from '../../shared/model/u-request.model';
import {URequestService} from '../create-request/u-request.service';
import {AlertController, ToastController} from '@ionic/angular';
import {map} from 'rxjs/operators';


@Component({
    selector: 'app-productdetail',
    templateUrl: './requestdetail.page.html',
    styleUrls: ['./requestdetail.page.scss'],
})
export class RequestDetailPage implements OnInit {
    request: URequest;
    viewForHelper = false;
    noHelpers = true;

    constructor(private router: Router,
                private requestService: URequestService,
                private toastr: ToastController,
                private alertController: AlertController,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params.id;
            this.loadRequest(id);
        });
        this.route.queryParams.subscribe(params => {
            this.viewForHelper = params.viewForHelpers === 'true';
            this.noHelpers = params.noHelpers === 'true';
        });
    }

    // INFO possibility to store local
    loadRequest(requestId) {
        this.requestService.find(requestId).subscribe(
            (request) => {
                this.request = request;
                console.log(this.request);
            },
            (error) => this.showToast(error.detail, 'danger')
        );
    }

    async showToast(message, type) {
        const toast = await this.toastr.create({message, color: type, duration: 5000});
        toast.present();
    }

    private completeRequest(request: URequest) {
        request.isFinished = true;
        this.requestService.update(request)
            .pipe(map(res => res.body))
            .subscribe(
                (req) => {
                    this.request = req;
                    this.showToast('Request successfully completed', 'success');
                }, (error) => this.showToast(error.detail, 'danger')
            );
    }

    private archiveRequest(request: URequest) {
        request.isArchived = true;
        this.requestService.update(request)
            .pipe(map(res => res.body))
            .subscribe(
                (req) => {
                    this.request = req;
                    this.showToast('Request successfully deleted', 'success');
                    this.router.navigateByUrl('myrequests');
                }, (error) => this.showToast(error.detail, 'danger')
            );
    }

    async tryArchive() {
        const alert = await this.alertController.create({
            header: 'Are you sure you want to delete the request?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Action canceled');
                    }
                }, {
                    text: 'Delete',
                    handler: () => {
                        this.archiveRequest(this.request);
                    }
                }
            ]
        });

        await alert.present();
    }

    async tryComplete() {
        const alert = await this.alertController.create({
            header: 'Are you sure you want to complete the request?',
            message: 'Request actions will be disabled afterwards.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Action canceled');
                    }
                }, {
                    text: 'Complete',
                    handler: () => {
                        this.completeRequest(this.request);
                    }
                }
            ]
        });

        await alert.present();
    }


    goToChat(request: URequest) {

    }


}
