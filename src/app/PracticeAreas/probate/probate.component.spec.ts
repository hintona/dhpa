import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbateComponent } from './probate.component';

describe('ProbateComponent', () => {
  let component: ProbateComponent;
  let fixture: ComponentFixture<ProbateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
