import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferhelpComponent } from './offerhelp.component';

describe('OfferhelpComponent', () => {
  let component: OfferhelpComponent;
  let fixture: ComponentFixture<OfferhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferhelpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
