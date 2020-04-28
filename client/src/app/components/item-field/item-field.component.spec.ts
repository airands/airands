import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemFieldComponent } from './item-field.component';

describe('ItemFieldComponent', () => {
  let component: ItemFieldComponent;
  let fixture: ComponentFixture<ItemFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFieldComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
