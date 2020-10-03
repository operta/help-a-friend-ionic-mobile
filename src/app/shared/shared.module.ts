import {NgModule} from '@angular/core';
import {HelpSharedLibsModule} from './shared-libs.module';

@NgModule({
    imports: [HelpSharedLibsModule],
    declarations: [
    ],
    exports: [
        HelpSharedLibsModule,
    ],
    providers: [
    ]
})
export class HelpSharedModule {
}
