import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbilisiComponent } from './tbilisi.component';

describe('TbilisiComponent', () => {
  let component: TbilisiComponent;
  let fixture: ComponentFixture<TbilisiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbilisiComponent]
    });
    fixture = TestBed.createComponent(TbilisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
