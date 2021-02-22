import {Component, Input, OnInit} from '@angular/core';
import {URequest} from '../../../shared/model/u-request.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-helper-request-overview',
  templateUrl: './helper-request-overview.component.html',
  styleUrls: ['./helper-request-overview.component.scss'],
})
export class HelperRequestOverviewComponent implements OnInit {
  @Input() request: URequest;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  goToRequestDetail() {
    this.router.navigate(['/requestdetail/' + this.request.id], {
      queryParams: {
        viewForHelper: true
      }
    });
  }

  hasOfferedHelpAlready(){}


}
