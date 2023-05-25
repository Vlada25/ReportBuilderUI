import { Component, Input, OnInit } from '@angular/core';
import { ITableElement } from 'src/app/models/report-elements/table-element';
import { ITableElementRequest } from 'src/app/models/requests/table-element-request';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableElement: ITableElement | undefined
  fakeRowsElems: number[] = [] 
  fakeColsElems: number[] = []
  inputWidth: string = ''
  titles: string[] = []
  
  ngOnInit(): void {
    for (let i = 0; i < (this.tableElement?.rowsCount as number); i++) {
      this.fakeRowsElems.push(i)
    }

    for (let i = 0; i < (this.tableElement?.columnsCount as number); i++) {
      this.fakeColsElems.push(i)
    }

    if (this.tableElement?.verticalTitles) {
      var newCount = (this.tableElement?.columnsCount as number) + 1
      this.inputWidth = "width: " + (100 / newCount) + "%;"
      this.titles = this.tableElement.verticalTitles.split(';')
    }

    if (this.tableElement?.horizontalTitles) {
      var newCount = (this.tableElement?.columnsCount as number)
      this.inputWidth = "width: " + (100 / newCount) + "%;"
      this.titles = this.tableElement.horizontalTitles.split(';')
    }
  }

  submit() {
    var tableRequest: ITableElementRequest = {tableNumber: this.tableElement?.tableNumber}
    tableRequest.values = []

    for (let i = 0; i < (this.tableElement?.rowsCount as number); i++) {
      tableRequest.values.push([])
      for (let j = 0; j < (this.tableElement?.columnsCount as number); j++) {
        var value = (<HTMLInputElement>document.getElementById(this.tableElement?.tableNumber + "." + i + "." + j)).value
        tableRequest.values[i].push(value)
      }
    }

    let elem = ReportService.tables.find(x => x.tableNumber == this.tableElement?.tableNumber)
    if (elem != null){
      let index = ReportService.tables.indexOf(elem as ITableElementRequest)
      ReportService.tables[index] = tableRequest
    }
    else {
      ReportService.tables.push(tableRequest)
    }

    alert("Данные сохранены")
  }
}
