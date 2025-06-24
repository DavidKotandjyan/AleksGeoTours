import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtskhetaComponent } from './mtskheta.component';

describe('MtskhetaComponent', () => {
  let component: MtskhetaComponent;
  let fixture: ComponentFixture<MtskhetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MtskhetaComponent]
    });
    fixture = TestBed.createComponent(MtskhetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
