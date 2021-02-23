import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {URequest} from '../../../shared/model/u-request.model';
import {PusherService} from '../pusher.service';
import {UResponseService} from '../u-response.service';
import {IUResponse} from '../../../shared/model/u-response.model';
import Pusher from 'pusher-js';
import {convertObjectLogDates} from '../../../shared/util/request-util';

@Component({
    selector: 'app-request-chat',
    templateUrl: './request-chat.component.html',
    styleUrls: ['./request-chat.component.scss'],
})
export class RequestChatComponent implements OnInit, OnChanges {
    @Input() request: URequest;
    inputMessage = '';
    channelName: string;
    messages: Array<IUResponse> = [];
    channel: any;
    pusher: Pusher;

    constructor(private pusherService: PusherService, private responseService: UResponseService) {
    }

    ngOnChanges() {
        if (this.request && this.request.id != null) {
            this.channelName = this.request.id.toString();
            this.channel = this.pusherService.init(this.channelName);
            this.channel.bind('new_message', (response: IUResponse) => {
                const data = convertObjectLogDates(response);
                console.log(data);
            });

        }

    }

    ngOnInit(): void {

    }

    sendMessage() {
        if (this.inputMessage !== '') {
            this.responseService.create(this.inputMessage, this.channelName)
                .subscribe((response) => {
                    console.log(response.body);
                }
         );
        }
    }

}
