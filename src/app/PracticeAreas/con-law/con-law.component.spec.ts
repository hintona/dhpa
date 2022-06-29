import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConLawComponent } from './con-law.component';

describe('ConLawComponent', () => {
  let component: ConLawComponent;
  let fixture: ComponentFixture<ConLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
