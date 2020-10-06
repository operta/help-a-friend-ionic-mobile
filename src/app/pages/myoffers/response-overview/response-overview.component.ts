import {Component, Input, OnInit} from '@angular/core';
import {URequest} from '../../../shared/model/u-request.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-response-overview',
    templateUrl: './response-overview.component.html',
    styleUrls: ['./response-overview.component.scss'],
})
export class ResponseOverviewComponent implements OnInit {
    @Input() request: URequest;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }


    goToRequestDetail() {
        this.router.navigate(['/requestdetail/' + this.request.id], {
            queryParams: {
                viewForHelper: true
            }
        });
    }


    goToChat(event) {
        event.stopPropagation();
        event.preventDefault();
        // TODO go to chat
        console.log('chat cliccked');
    }


}
