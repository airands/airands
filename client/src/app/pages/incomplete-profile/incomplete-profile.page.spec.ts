import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncompleteProfilePage } from './incomplete-profile.page';

describe('IncompleteProfilePage', () => {
  let component: IncompleteProfilePage;
  let fixture: ComponentFixture<IncompleteProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompleteProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncompleteProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
