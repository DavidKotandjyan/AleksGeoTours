import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoriComponent } from './gori.component';

describe('GoriComponent', () => {
  let component: GoriComponent;
  let fixture: ComponentFixture<GoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoriComponent]
    });
    fixture = TestBed.createComponent(GoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
