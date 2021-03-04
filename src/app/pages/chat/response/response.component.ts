import {Component, Input, OnInit} from '@angular/core';
import {IUResponse, UResponse} from '../../../shared/model/u-response.model';
import {UResponseService} from '../u-response.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {
  @Input() response: IUResponse;

  constructor(private responseService: UResponseService) { }

  ngOnInit() {
    console.log(this.response)
  }

  createNewResponse() {
    // TODO CALL INPUT MESSAGE COMPONENT
    const text = 'response on response';
    const response: UResponse = {
      message: text,
      idResponseId: this.response.id
    };
    this.responseService.createResponseOfResponse(response)
        .subscribe((res) => {
          console.log('response created');
          // TODO close input message
        })
  }

}
