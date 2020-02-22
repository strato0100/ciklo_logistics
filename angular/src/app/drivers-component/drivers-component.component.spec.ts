import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversComponentComponent } from './drivers-component.component';

describe('DriversComponentComponent', () => {
  let component: DriversComponentComponent;
  let fixture: ComponentFixture<DriversComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
