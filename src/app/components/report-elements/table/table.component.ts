import { Component, Input } from '@angular/core';
import { ITableElement } from 'src/app/models/report-elements/table-element';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() tableElement: ITableElement | undefined
  
}
