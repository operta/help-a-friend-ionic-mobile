import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent {
    @Output() message: EventEmitter<string> = new EventEmitter<string>();
    @Input() placeholder = 'Offer your help...';
    inputMessage = '';

    constructor(private toastr: ToastController, private translate: TranslateService) {
    }

    emitMessage() {
        if (this.inputMessage != null && this.inputMessage.length > 10) {
            this.message.emit(this.inputMessage);
            this.inputMessage = '';
        } else {
            this.translate.get('messageLengthError').subscribe(message => {
                this.showErrorToast(message);
            });
        }
    }

    async showErrorToast(message) {
        const toast = await this.toastr.create({message, color: 'danger', duration: 5000});
        toast.present();
    }

}
