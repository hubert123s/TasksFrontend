import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RateOutputDto } from 'src/app/model/rate-output-dto.model';
import {HttpParams} from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private readonly apiUrl = 'http://localhost:8080/currencies';

  constructor(private http: HttpClient) { }

  getRequest(page: number, pageSize: number): Observable<RateOutputDto[]> {
  const params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());

  return this.http.get<RateOutputDto[]>(`${this.apiUrl}/request`, { params });
}

  addRate(rate: RateOutputDto): Observable<RateOutputDto> {
    return this.http.post<RateOutputDto>(`${this.apiUrl}/get-current-currency-value-command`, rate);
  }
}
