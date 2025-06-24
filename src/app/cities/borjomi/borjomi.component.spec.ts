import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorjomiComponent } from './borjomi.component';

describe('BorjomiComponent', () => {
  let component: BorjomiComponent;
  let fixture: ComponentFixture<BorjomiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorjomiComponent]
    });
    fixture = TestBed.createComponent(BorjomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
