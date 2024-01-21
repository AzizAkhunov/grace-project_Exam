import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrStatiComponent } from './str-stati.component';

describe('StrStatiComponent', () => {
  let component: StrStatiComponent;
  let fixture: ComponentFixture<StrStatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrStatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrStatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
