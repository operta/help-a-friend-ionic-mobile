import {NgModule} from '@angular/core';
import {MyOffersPageRoutingModule} from './myoffers-routing.module';
import {MyOffersPage} from './myoffers.page';
import {ResponseOverviewComponent} from './response-overview/response-overview.component';
import {HelpSharedModule} from '../../shared/shared.module';
import {URequestService} from '../create-request/u-request.service';

@NgModule({
    imports: [
        HelpSharedModule,
        MyOffersPageRoutingModule
    ],
    declarations: [
        MyOffersPage,
        ResponseOverviewComponent
    ],
    providers: [URequestService]
})
export class MyOffersPageModule {
}
