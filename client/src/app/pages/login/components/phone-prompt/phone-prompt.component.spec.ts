import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonePromptComponent } from './phone-prompt.component';

describe('PhonePromptComponent', () => {
  let component: PhonePromptComponent;
  let fixture: ComponentFixture<PhonePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonePromptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
