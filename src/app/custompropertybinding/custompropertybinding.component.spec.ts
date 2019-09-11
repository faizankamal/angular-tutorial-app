import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompropertybindingComponent } from './custompropertybinding.component';

describe('CustompropertybindingComponent', () => {
  let component: CustompropertybindingComponent;
  let fixture: ComponentFixture<CustompropertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustompropertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
