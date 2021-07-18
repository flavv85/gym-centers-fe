import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutSportComponent } from './add-workout-sport.component';

describe('AddWorkoutSportComponent', () => {
  let component: AddWorkoutSportComponent;
  let fixture: ComponentFixture<AddWorkoutSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkoutSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkoutSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
