import { Component, OnInit } from '@angular/core';
import { LabsTemplateService } from 'src/app/services/labs-template.service';

@Component({
  selector: 'app-choose-lab-page',
  templateUrl: './choose-lab-page.component.html',
  styleUrls: ['./choose-lab-page.component.css']
})
export class ChooseLabPageComponent implements OnInit{

  constructor(public labsTemplateService: LabsTemplateService) {}

  ngOnInit(): void {
    this.labsTemplateService.getAll().subscribe(() => {})
  }


}
