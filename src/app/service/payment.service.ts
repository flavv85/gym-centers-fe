import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../GymCentersModal';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private url = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addPayment(payment: Payment, id: number): Observable<Payment> {
    return this.httpClient.post<Payment>(
      `${this.url}/addPayment/${id}`,
      payment
    );
  }

  editPayment(payment: Payment, id: number): Observable<Payment> {
    return this.httpClient.put<Payment>(
      `${this.url}/editPayment/${id}`,
      payment
    );
  }

  deletePayment(id: number): Observable<Payment> {
    return this.httpClient.delete<Payment>(`${this.url}/deletePayment/${id}`);
  }

  findPaymentById(id: number): Observable<Payment> {
    return this.httpClient.get<Payment>(`${this.url}/findPaymentById/${id}`);
  }

  findPaymentForCustomer(id: number): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(
      `${this.url}/findPaymentForCustomer/${id}`
    );
  }
}
