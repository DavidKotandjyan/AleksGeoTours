import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinetoursComponent } from './winetours.component';

describe('WinetoursComponent', () => {
  let component: WinetoursComponent;
  let fixture: ComponentFixture<WinetoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinetoursComponent]
    });
    fixture = TestBed.createComponent(WinetoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
