import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingsComponentComponent } from './shippings-component.component';

describe('ShippingsComponentComponent', () => {
  let component: ShippingsComponentComponent;
  let fixture: ComponentFixture<ShippingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
