import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OchniyKursComponent } from './ochniy-kurs.component';

describe('OchniyKursComponent', () => {
  let component: OchniyKursComponent;
  let fixture: ComponentFixture<OchniyKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OchniyKursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OchniyKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
