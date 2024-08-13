import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSysytemComponent } from './billing-sysytem.component';

describe('BillingSysytemComponent', () => {
  let component: BillingSysytemComponent;
  let fixture: ComponentFixture<BillingSysytemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingSysytemComponent]
    });
    fixture = TestBed.createComponent(BillingSysytemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
