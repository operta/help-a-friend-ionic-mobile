import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PusherService} from './pusher.service';
import {HttpClientModule} from '@angular/common/http';
import {UResponseService} from './u-response.service';
import {RequestChatComponent} from './request-chat/request-chat.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule
    ],
    declarations: [
        RequestChatComponent
    ],
    providers: [
        PusherService,
        UResponseService,
    ],
    exports: [
        RequestChatComponent
    ]
})
export class ChatModule {
}
