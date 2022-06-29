import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLitComponent } from './com-lit.component';

describe('ComLitComponent', () => {
  let component: ComLitComponent;
  let fixture: ComponentFixture<ComLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
