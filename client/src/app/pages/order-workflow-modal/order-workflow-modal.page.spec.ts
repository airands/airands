import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderWorkflowModalPage } from './order-workflow-modal.page';

describe('OrderWorkflowModalPage', () => {
  let component: OrderWorkflowModalPage;
  let fixture: ComponentFixture<OrderWorkflowModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkflowModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderWorkflowModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
