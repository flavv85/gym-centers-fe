import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportsCustomerComponent } from './add-sports-customer.component';

describe('AddSportsCustomerComponent', () => {
  let component: AddSportsCustomerComponent;
  let fixture: ComponentFixture<AddSportsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSportsCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSportsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
