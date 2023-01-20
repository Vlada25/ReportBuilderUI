import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILabData } from 'src/app/models/lab-data';
import { LabsTemplateService } from 'src/app/services/labs-template.service';

@Component({
  selector: 'app-building-report-page',
  templateUrl: './building-report-page.component.html',
  styleUrls: ['./building-report-page.component.css']
})
export class BuildingReportPageComponent implements OnInit{

  labNumber: number | undefined
  currentLab: ILabData | undefined

  constructor (
    private activatedRout: ActivatedRoute,
    private labsTemplateService: LabsTemplateService) {}

  ngOnInit(): void {
    this.labNumber = this.activatedRout.snapshot.params['labNumber']
    this.labsTemplateService.getLabsDataByLabNumber(this.labNumber)
      .subscribe(labData => this.currentLab = labData)
  }

}
