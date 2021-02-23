import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import {PUSHER_APP_KEY, PUSHER_CLUSTER} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

    private channel;

    constructor() {
        this.channel = new Pusher(PUSHER_APP_KEY, {cluster: PUSHER_CLUSTER, forceTLS: false});
    }

    init(channelName: string) {
      return this.channel.subscribe(channelName);
    }
}
