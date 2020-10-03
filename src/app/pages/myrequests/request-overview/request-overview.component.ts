import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {URequest} from '../../../shared/model/u-request.model';
import {URequestService} from '../../create-request/u-request.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-request-overview',
    templateUrl: './request-overview.component.html',
    styleUrls: ['./request-overview.component.scss'],
})
export class RequestOverviewComponent implements OnChanges {
    @Input() request: URequest;
    noHelpers = true;
    hasHelpers$: Observable<boolean>;

    constructor(private router: Router,
                private requestService: URequestService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.request) {
            this.hasHelpers$ = this.hasRequestHelpers(this.request.id);
        }
    }


    goToRequestDetail() {
        this.router.navigate(['/requestdetail/' + this.request.id], {
            queryParams: {
                noHelpers: this.noHelpers,
                viewForHelper: false
            }
        });
    }

    hasRequestHelpers(requestId): Observable<boolean> {
        return this.requestService.hasRequestHelpers(requestId).pipe(map(res => {
            this.noHelpers = !res;
            return res;
        }));
    }

    goToChat(event) {
        event.stopPropagation();
        event.preventDefault();
        // TODO go to chat
        console.log('chat cliccked');
    }



}
