import {NgModule} from '@angular/core';
import {MyRequestsPage} from './myrequests.page';
import {MyRequestsPageRoutingModule} from './myrequests-routing.module';
import {RequestOverviewComponent} from './request-overview/request-overview.component';
import {HelpSharedModule} from '../../shared/shared.module';
import {URequestService} from '../create-request/u-request.service';

@NgModule({
    imports: [
        HelpSharedModule,
        MyRequestsPageRoutingModule
    ],
    declarations: [
        MyRequestsPage,
        RequestOverviewComponent
    ],
    providers: [URequestService],

})
export class MyRequestsPageModule {
}
