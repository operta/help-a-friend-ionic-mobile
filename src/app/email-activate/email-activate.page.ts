import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../core/auth/account.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-email-activate',
  templateUrl: './email-activate.page.html',
  styleUrls: ['./email-activate.page.scss'],
})
export class EmailActivatePage implements OnInit {
  success = false;
  error = false;

  constructor(private route: ActivatedRoute, private activateService: AccountService) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(flatMap(params => this.activateService.activate(params.key))).subscribe(
        () => (this.success = true),
        () => (this.error = true)
    );
  }

}
