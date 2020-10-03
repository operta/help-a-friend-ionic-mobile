import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailActivatePage } from './email-activate.page';

describe('EmailActivatePage', () => {
  let component: EmailActivatePage;
  let fixture: ComponentFixture<EmailActivatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailActivatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailActivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
