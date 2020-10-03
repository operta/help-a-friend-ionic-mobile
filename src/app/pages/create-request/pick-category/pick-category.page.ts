import {Component, OnInit} from '@angular/core';
import {RequestCategory} from '../../../shared/model/request-category.model';
import {RequestCategoryService} from './request-category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.page.html',
  styleUrls: ['./pick-category.page.scss'],
})
export class PickCategoryPage implements OnInit {
  categories: RequestCategory[] = [];


  constructor(private categoriesService: RequestCategoryService,
              private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories() {
    this.categoriesService.query().subscribe(res => this.categories = res.body);
  }


  setCategory(categoryId: number) {
    this.router.navigate(['/create-request/address'], {queryParams: {type: 'delivery', categoryId}});

  }


}
