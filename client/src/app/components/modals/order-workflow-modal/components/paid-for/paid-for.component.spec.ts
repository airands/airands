import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaidForComponent } from './paid-for.component';

describe('PaidForComponent', () => {
  let component: PaidForComponent;
  let fixture: ComponentFixture<PaidForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidForComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaidForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
