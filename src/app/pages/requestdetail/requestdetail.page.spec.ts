import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestdetailPage } from './requestdetail.page';

describe('ProductdetailPage', () => {
  let component: RequestdetailPage;
  let fixture: ComponentFixture<RequestdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
