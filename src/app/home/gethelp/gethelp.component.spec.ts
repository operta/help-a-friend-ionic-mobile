import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GethelpComponent } from './gethelp.component';

describe('GethelpComponent', () => {
  let component: GethelpComponent;
  let fixture: ComponentFixture<GethelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethelpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GethelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});