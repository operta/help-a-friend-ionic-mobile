import {NgModule} from '@angular/core';
import {AllrequestsPageRoutingModule} from './allrequests-routing.module';
import {AllrequestsPage} from './allrequests.page';
import {HelperRequestOverviewComponent} from './helper-request-overview/helper-request-overview.component';
import {URequestService} from '../create-request/u-request.service';
import {HelpSharedModule} from '../../shared/shared.module';
import {SearchComponent} from './search/search.component';
import {RequestCategoryService} from '../pick-category/request-category.service';

@NgModule({
    imports: [
        HelpSharedModule,
        AllrequestsPageRoutingModule
    ],
    declarations: [
        AllrequestsPage,
        HelperRequestOverviewComponent,
        SearchComponent
    ],
    providers: [
        URequestService,
        RequestCategoryService
    ]
})
export class AllrequestsPageModule {
}
