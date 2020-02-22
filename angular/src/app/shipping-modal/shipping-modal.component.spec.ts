import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingModalComponent } from './shipping-modal.component';

describe('ShippingModalComponent', () => {
  let component: ShippingModalComponent;
  let fixture: ComponentFixture<ShippingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
