import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
    isHelper = false;

    constructor() {
    }

    ngOnInit() {
    }

    onToggle() {
        this.isHelper = !this.isHelper;
    }


}
