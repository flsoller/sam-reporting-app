import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportApiService {
  baseUrl = '/api/v1/reports';

  constructor(private http: HttpClient) {}

  getPortableReport(jobId: string) {
    return this.http.get<Blob>(`${this.baseUrl}/portable/${jobId}`, {
      responseType: 'blob' as 'json',
    });
  }
}
