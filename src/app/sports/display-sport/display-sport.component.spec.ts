import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySportComponent } from './display-sport.component';

describe('DisplaySportComponent', () => {
  let component: DisplaySportComponent;
  let fixture: ComponentFixture<DisplaySportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
