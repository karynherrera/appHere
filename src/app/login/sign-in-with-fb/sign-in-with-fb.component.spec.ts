import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithFbComponent } from './sign-in-with-fb.component';

describe('SignInWithFbComponent', () => {
  let component: SignInWithFbComponent;
  let fixture: ComponentFixture<SignInWithFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWithFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWithFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
