import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IPictureElement } from 'src/app/models/report-elements/picture-element';
import { IPictureElementRequest } from 'src/app/models/requests/picture-element-request';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  @Input() pictureElement: IPictureElement  | undefined
  @ViewChild('input') inputRef: ElementRef | undefined
  imagePreview: any

  constructor(private reportService: ReportService) {}

  triggerClick(){
    this.inputRef?.nativeElement.click()
  }

  onFileUpload(event: any){
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)

    this.reportService.createPhotoForReport(file)
      .subscribe(info => {
        let elem = ReportService.pictures.find(x => x.pictureNumber == this.pictureElement?.pictureNumber)
        if (elem != null){
          let index = ReportService.pictures.indexOf(elem as IPictureElementRequest)
          ReportService.pictures[index] = {
            pictureNumber: this.pictureElement?.pictureNumber,
            fileName: info.fileName
          }
        }
        else {
          ReportService.pictures?.push({
            pictureNumber: this.pictureElement?.pictureNumber,
            fileName: info.fileName
          })
        }
      })
  }
}
