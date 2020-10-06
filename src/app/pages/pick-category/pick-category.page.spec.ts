import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickCategoryPage } from './pick-category.page';

describe('PickCategoryPage', () => {
  let component: PickCategoryPage;
  let fixture: ComponentFixture<PickCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
