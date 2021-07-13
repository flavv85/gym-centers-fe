import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.httpClient.post<Customer>(
      `${this.url}/addCustomer/${id}`,
      customer
    );
  }

  editCustomer(Customer: Customer, id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(
      `${this.url}/editCustomer/${id}`,
      Customer
    );
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.url}/deleteCustomer/${id}`);
  }

  findCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.url}/findCustomerById/${id}`);
  }

  findAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.url}/findAllCustomers`);
  }
}
