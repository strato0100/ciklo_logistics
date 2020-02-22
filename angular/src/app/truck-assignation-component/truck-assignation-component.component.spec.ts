import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAssignationComponentComponent } from './truck-assignation-component.component';

describe('TruckAssignationComponentComponent', () => {
  let component: TruckAssignationComponentComponent;
  let fixture: ComponentFixture<TruckAssignationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckAssignationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckAssignationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
