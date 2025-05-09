import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderComponent } from './all-order.component';

describe('AllOrderComponent', () => {
  let component: AllOrderComponent;
  let fixture: ComponentFixture<AllOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
