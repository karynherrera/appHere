import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereRoutingComponent } from './here-routing.component';

describe('HereRoutingComponent', () => {
  let component: HereRoutingComponent;
  let fixture: ComponentFixture<HereRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
