import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllrequestsPage } from './allrequests.page';

describe('AllrequestsPage', () => {
  let component: AllrequestsPage;
  let fixture: ComponentFixture<AllrequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllrequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
