import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  interpretDate(query: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/interpret-date`, { query });
  }

  generateProduct(query: string, format: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate-product`, { query, format });
  }

  getHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/history`);
  }
}
