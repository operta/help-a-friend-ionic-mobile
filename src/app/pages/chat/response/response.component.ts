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
    showResponse = false;

    constructor(private responseService: UResponseService) {
    }

    ngOnInit() {
    }

    createNewResponse(inputMessage: string) {
        const response: UResponse = {
            message: inputMessage,
            idResponseId: this.response.id
        };
        this.responseService.createResponseOfResponse(response)
            .subscribe((res) => {
                this.response.childResponses.push(res.body);
                // TODO error checking and success messages
                this.showResponse = false;
            });
    }

}
