import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSubscriptionsComponent } from './payments-subscriptions.component';

describe('PaymentsSubscriptionsComponent', () => {
  let component: PaymentsSubscriptionsComponent;
  let fixture: ComponentFixture<PaymentsSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSubscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
