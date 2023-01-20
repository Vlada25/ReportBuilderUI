import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ILabData } from '../models/lab-data';
import { ILabsTemplate } from '../models/labs-template';

@Injectable({
  providedIn: 'root'
})
export class LabsTemplateService {

  labsTemplates: ILabsTemplate[] | undefined

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ILabsTemplate[]> {
    return this.httpClient.get<ILabsTemplate[]>('https://localhost:7200/api/labsTemplates')
      .pipe(
        tap(lts => {
          this.labsTemplates = lts
        })
      )
  }

  getPdfByLabNumber(labNumber: number | undefined) {
    return this.httpClient.get('https://localhost:7200/api/reports/pdfTemplate/' + labNumber,
      {observe:'response', responseType:'blob'})
  } 

  getLabsDataByLabNumber(labNumber: number | undefined): Observable<ILabData> {
    return this.httpClient.get<ILabData>('https://localhost:7200/api/labsTemplates/data/' + labNumber)
      .pipe(
        tap(data => {
          console.log(data)
        })
      )
  }
}
