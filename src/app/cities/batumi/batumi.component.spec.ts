import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatumiComponent } from './batumi.component';

describe('BatumiComponent', () => {
  let component: BatumiComponent;
  let fixture: ComponentFixture<BatumiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatumiComponent]
    });
    fixture = TestBed.createComponent(BatumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
