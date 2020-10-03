import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-matching',
    templateUrl: './matching.page.html',
    styleUrls: ['./matching.page.scss'],
})
export class MatchingPage implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
        });

    }

}
