import {ViewWillEnter} from '@ionic/angular';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {URequest} from '../../shared/model/u-request.model';
import {URequestService} from '../create-request/u-request.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-myorders',
  templateUrl: './myoffers.page.html',
  styleUrls: ['./myoffers.page.scss'],
})
export class MyOffersPage implements ViewWillEnter {
  requests$: Observable<URequest[]>;

  constructor(private requestService: URequestService) {
  }

  ionViewWillEnter(): void {
    this.loadRequestsByUserResponses();
  }


  private loadRequestsByUserResponses() {
    this.requests$ = this.requestService.findByResponses().pipe(map(res => {
      return res.body;
    }));
  }
}
