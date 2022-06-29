import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RETComponent } from './ret.component';

describe('RETComponent', () => {
  let component: RETComponent;
  let fixture: ComponentFixture<RETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RETComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
