import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllWorktimesComponent } from './find-all-worktimes.component';

describe('FindAllWorktimesComponent', () => {
  let component: FindAllWorktimesComponent;
  let fixture: ComponentFixture<FindAllWorktimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllWorktimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllWorktimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
