import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazbegiComponent } from './kazbegi.component';

describe('KazbegiComponent', () => {
  let component: KazbegiComponent;
  let fixture: ComponentFixture<KazbegiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KazbegiComponent]
    });
    fixture = TestBed.createComponent(KazbegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
