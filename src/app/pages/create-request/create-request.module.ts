import {NgModule} from '@angular/core';
import {CreateRequestPageRoutingModule} from './create-request-routing.module';
import {CreateRequestPage} from './create-request.page';
import {HelpSharedModule} from '../../shared/shared.module';
import {AddressPageModule} from '../address/address.module';
import {URequestService} from './u-request.service';

@NgModule({
    imports: [
        HelpSharedModule,
        AddressPageModule,
        CreateRequestPageRoutingModule
    ],
    declarations: [CreateRequestPage],
    providers: [URequestService]
})
export class CreateRequestPageModule {
}
