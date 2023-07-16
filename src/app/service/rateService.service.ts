import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from 'src/app/model/rate.model';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private readonly apiUrl = 'http://localhost:8080/currencies';

  constructor(private http: HttpClient) { }

  getRequest(): Observable<Rate[]> {
    return this.http.get<Rate[]>(`${this.apiUrl}/request`);
  }
  addRate(rate: Rate): Observable<Rate> {
    return this.http.post<Rate>(`${this.apiUrl}/get-current-currency-value-command`, rate);
  }
}
