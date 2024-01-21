import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtziviComponent } from './otzivi.component';

describe('OtziviComponent', () => {
  let component: OtziviComponent;
  let fixture: ComponentFixture<OtziviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtziviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtziviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
