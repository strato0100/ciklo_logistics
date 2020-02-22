import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksComponentComponent } from './trucks-component.component';

describe('TrucksComponentComponent', () => {
  let component: TrucksComponentComponent;
  let fixture: ComponentFixture<TrucksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
