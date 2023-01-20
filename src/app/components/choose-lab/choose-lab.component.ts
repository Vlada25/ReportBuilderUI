import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ILabsTemplate } from 'src/app/models/labs-template';
import { LabsTemplateService } from 'src/app/services/labs-template.service';

@Component({
  selector: 'app-choose-lab',
  templateUrl: './choose-lab.component.html',
  styleUrls: ['./choose-lab.component.css']
})
export class ChooseLabComponent {

  @Input() labsTemplate: ILabsTemplate | undefined

  constructor(
    private labsTemplateService: LabsTemplateService,
    private router: Router) {}

  getTemplate() {
    this.labsTemplateService.getPdfByLabNumber(this.labsTemplate?.number)
      .subscribe(response => {
        let filename = "template" + this.labsTemplate?.number
        let blob: Blob = response.body as Blob
        let a = document.createElement('a')
        a.download = filename!
        a.href = window.URL.createObjectURL(blob)
        a.click()
        this.router.navigate(['buildingReport/', this.labsTemplate?.number])
      })
  }
}
