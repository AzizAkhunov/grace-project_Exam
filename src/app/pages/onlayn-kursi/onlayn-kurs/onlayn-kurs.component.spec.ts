import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlaynKursComponent } from './onlayn-kurs.component';

describe('OnlaynKursComponent', () => {
  let component: OnlaynKursComponent;
  let fixture: ComponentFixture<OnlaynKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlaynKursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlaynKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
