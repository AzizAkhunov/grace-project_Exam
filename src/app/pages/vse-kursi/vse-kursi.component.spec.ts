import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VseKursiComponent } from './vse-kursi.component';

describe('VseKursiComponent', () => {
  let component: VseKursiComponent;
  let fixture: ComponentFixture<VseKursiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VseKursiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VseKursiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
