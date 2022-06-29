import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFDComponent } from './mfd.component';

describe('MFDComponent', () => {
  let component: MFDComponent;
  let fixture: ComponentFixture<MFDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MFDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
