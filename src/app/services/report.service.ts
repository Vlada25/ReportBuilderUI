import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPictureInfo } from '../models/picture-info';
import { IPictureElementRequest } from '../models/requests/picture-element-request';
import { IReportRequest } from '../models/requests/report-request';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  static pictures: IPictureElementRequest[] = []

  constructor(private httpClient: HttpClient) { }

  createReport(labNumber: number | undefined, reportRequest: IReportRequest) {
    return this.httpClient.post('https://localhost:7200/api/reports/' + labNumber, 
      reportRequest, 
      {observe:'response', responseType:'blob'})
  }

  createPhotoForReport(photo: File): Observable<IPictureInfo> {
    const body = new FormData();
    body.append("file", photo, photo.name)

    return this.httpClient.post<IPictureInfo>('https://localhost:7200/api/reports/pictures', body)
  }

}
