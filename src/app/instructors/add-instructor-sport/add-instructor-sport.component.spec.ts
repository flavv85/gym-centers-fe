import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructorSportComponent } from './add-instructor-sport.component';

describe('AddInstructorSportComponent', () => {
  let component: AddInstructorSportComponent;
  let fixture: ComponentFixture<AddInstructorSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstructorSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstructorSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
