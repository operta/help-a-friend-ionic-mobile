import {Component, Input, OnInit} from '@angular/core';
import {IUResponse} from '../../../shared/model/u-response.model';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {
  @Input() response: IUResponse;

  constructor() { }

  ngOnInit() {}

  createNewResponse() {
    // TODO
  }

}
