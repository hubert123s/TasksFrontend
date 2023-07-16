import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RateOutputDto } from 'src/app/model/rate-output-dto.model';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private readonly apiUrl = 'http://localhost:8080/currencies';

  constructor(private http: HttpClient) { }

  getRequest(): Observable<RateOutputDto[]> {
    return this.http.get<RateOutputDto[]>(`${this.apiUrl}/request`);
  }
  addRate(rate: RateOutputDto): Observable<RateOutputDto> {
    return this.http.post<RateOutputDto>(`${this.apiUrl}/get-current-currency-value-command`, rate);
  }
}
