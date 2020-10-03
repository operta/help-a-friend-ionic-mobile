import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    exports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        TranslateModule
    ]
})
export class HelpSharedLibsModule {
}
