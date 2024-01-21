import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLearnsComponent } from './free-learns.component';

describe('FreeLearnsComponent', () => {
  let component: FreeLearnsComponent;
  let fixture: ComponentFixture<FreeLearnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeLearnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeLearnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
