import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {URequest} from '../../../shared/model/u-request.model';
import {PusherService} from '../pusher.service';
import {UResponseService} from '../u-response.service';
import {IUResponse} from '../../../shared/model/u-response.model';
import Pusher from 'pusher-js';
import {convertObjectLogDates} from '../../../shared/util/request-util';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-request-chat',
    templateUrl: './request-chat.component.html',
    styleUrls: ['./request-chat.component.scss'],
})
export class RequestChatComponent implements OnInit, OnChanges {
    @Input() request: URequest;
    inputMessage = '';
    channelName: string;
    responses: Array<IUResponse> = [];
    channel: any;
    pusher: Pusher;

    constructor(private pusherService: PusherService, private responseService: UResponseService) {
    }

    ngOnChanges() {
        if (this.request && this.request.id != null) {
            this.loadResponses(this.request.id);
            this.channelName = this.request.id.toString();
            this.channel = this.pusherService.init(this.channelName);
            this.channel.bind('new_message', (response: IUResponse) => {
                const data = convertObjectLogDates(response);
                this.responses.push(data);
            });

        }

    }

    private loadResponses(requestId: number) {
        this.responseService.loadResponsesOfRequest(requestId)
            .pipe(map(res => res.body))
            .subscribe((responses: IUResponse[]) => this.responses = responses);
    }

    ngOnInit(): void {

    }

    sendMessage() {
        if (this.inputMessage !== '') {
            this.responseService.create(this.inputMessage, this.channelName)
                .subscribe((response) => {
                        this.inputMessage = '';
                    }
                );
        }
    }


}
