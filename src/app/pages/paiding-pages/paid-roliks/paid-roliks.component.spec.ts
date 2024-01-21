import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidRoliksComponent } from './paid-roliks.component';

describe('PaidRoliksComponent', () => {
  let component: PaidRoliksComponent;
  let fixture: ComponentFixture<PaidRoliksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaidRoliksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaidRoliksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
