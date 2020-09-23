import {Component, OnInit} from '@angular/core';
import {PusherService} from '../pusher.service';
import {v4} from 'uuid';
import {HttpClient} from '@angular/common/http';

interface Message {
    id: string;
    text: string;
    timeStamp: Date;
    type: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    messages: Array<Message> = [];
    message: string = '';
    lastMessageId;


    constructor(private pusherService: PusherService, private http: HttpClient) {

    }

    ngOnInit(): void {
        const channel = this.pusherService.init('test-chat');
        channel.bind('message', (data) => {

        });
    }


    sendMessage() {
        if (this.message !== '') {
            // Assign an id to each outgoing message. It aids in the process of differentiating between outgoing and incoming messages
            this.lastMessageId = v4();
            const data = {
                id: this.lastMessageId,
                text: this.message,
            };

            this.http
                .post(`http://localhost:8080/api/chat/message`, data, {
                    params: {
                        'channel-name': 'test-chat'
                    }
                })
                .subscribe((res: Message) => {
                    const message = {
                        ...res,
                        // The message type is added to distinguish between incoming and outgoing             messages. It also aids with styling of each message type
                        type: 'outgoing',
                    };
                    this.messages = this.messages.concat(message);
                    this.message = '';
                });

        }
    }

    getClasses(messageType) {
        return {
            incoming: messageType === 'incoming',
            outgoing: messageType === 'outgoing',
        };
    }

}
