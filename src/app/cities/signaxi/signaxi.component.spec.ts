import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaxiComponent } from './signaxi.component';

describe('SignaxiComponent', () => {
  let component: SignaxiComponent;
  let fixture: ComponentFixture<SignaxiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignaxiComponent]
    });
    fixture = TestBed.createComponent(SignaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
