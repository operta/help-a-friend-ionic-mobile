import {Component, Input, OnInit} from '@angular/core';
import {IUResponse, UResponse} from '../../../shared/model/u-response.model';
import {UResponseService} from '../u-response.service';
import {ToastController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {
    @Input() response: IUResponse;
    showResponse = false;

    constructor(private responseService: UResponseService,
                private toastr: ToastController,
                private translate: TranslateService) {
    }

    ngOnInit() {
    }

    createNewResponse(inputMessage: string) {
        const response: UResponse = {
            message: inputMessage,
            idResponseId: this.response.id
        };
        this.responseService.createResponseOfResponse(response)
            .subscribe((res) => {
                this.response.childResponses.push(res.body);
                this.showResponse = false;
                this.translate.get('replyPosted').subscribe((message) =>
                    this.showToast(message, 'success')
                );
            }, (error) => {
                this.showToast(error, 'danger');
            });
    }

    async showToast(message: string, color: string) {
        const toast = await this.toastr.create({message, color: color, duration: 5000});
        toast.present();
    }


}
