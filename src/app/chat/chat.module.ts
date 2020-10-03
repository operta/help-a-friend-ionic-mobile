import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ChatPage} from './chat.page';

import {ChatPageRoutingModule} from './chat-routing.module';
import {PusherService} from '../pusher.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatPageRoutingModule,
        HttpClientModule
    ],
    declarations: [ChatPage],
    providers: [
        PusherService
    ]
})
export class ChatPageModule {
}
