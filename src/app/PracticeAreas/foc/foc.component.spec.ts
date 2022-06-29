import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOCComponent } from './foc.component';

describe('FOCComponent', () => {
  let component: FOCComponent;
  let fixture: ComponentFixture<FOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
