import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestCategoryService} from '../../pick-category/request-category.service';
import {RequestCategory} from '../../../shared/model/request-category.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

    categories$: Observable<RequestCategory[]>;
    idCategory: number;

    @Output('selectedCategoryId') selectedCategoryId: EventEmitter<number> = new EventEmitter<number>();


    constructor(private categoryService: RequestCategoryService) {
    }

    ngOnInit() {
        this.loadCategories();
    }

    private loadCategories() {
        this.categories$ = this.categoryService.query()
            .pipe(map(res => res.body));

    }

    categorySelected(event) {
        this.idCategory = event.detail.value;
        this.selectedCategoryId.emit(this.idCategory);
    }

}
