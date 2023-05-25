import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ILabData } from 'src/app/models/lab-data';
import { LabsTemplateService } from 'src/app/services/labs-template.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-building-report-page',
  templateUrl: './building-report-page.component.html',
  styleUrls: ['./building-report-page.component.css']
})
export class BuildingReportPageComponent implements OnInit{

  labNumber: number | undefined
  currentLab: ILabData | undefined

  form = new FormGroup({
    studentName: new FormControl<string>('', [
      Validators.required
    ]),
    teacherName: new FormControl<string>('', [
      Validators.required
    ]),
    group: new FormControl<string>('', [
      Validators.required
    ])
  })

  constructor (
    private activatedRout: ActivatedRoute,
    private labsTemplateService: LabsTemplateService,
    private reportService: ReportService,
    private router: Router) {}

  get studentName() {
    return this.form.controls.studentName as FormControl
  }

  get teacherName() {
    return this.form.controls.teacherName as FormControl
  }

  get group() {
    return this.form.controls.group as FormControl
  }

  ngOnInit(): void {
    this.labNumber = this.activatedRout.snapshot.params['labNumber']
    this.labsTemplateService.getLabsDataByLabNumber(this.labNumber)
      .subscribe(labData => this.currentLab = labData)
  }

  submit() {
    this.reportService.createReport(this.labNumber, {
      personalData: {
        teacherFullName: this.form.value.teacherName as string,
        studentFullName: this.form.value.studentName as string,
        studentGroup: this.form.value.group as string
      },
      pictureElements: ReportService.pictures,
      tableElements: ReportService.tables
    })
      .subscribe(response => {
        let filename = "report" + this.labNumber
        let blob: Blob = response.body as Blob
        let a = document.createElement('a')
        a.download = filename!
        a.href = window.URL.createObjectURL(blob)
        a.click()
        //this.router.navigate(['/'])
    })
  }
}
