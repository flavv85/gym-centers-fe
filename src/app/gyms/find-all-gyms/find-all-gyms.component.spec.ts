import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllGymsComponent } from './find-all-gyms.component';

describe('FindAllGymsComponent', () => {
  let component: FindAllGymsComponent;
  let fixture: ComponentFixture<FindAllGymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllGymsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
