import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereMapApisComponent } from './here-map-apis.component';

describe('HereMapApisComponent', () => {
  let component: HereMapApisComponent;
  let fixture: ComponentFixture<HereMapApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereMapApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereMapApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
