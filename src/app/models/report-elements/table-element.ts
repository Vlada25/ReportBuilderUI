import { IReportElement } from "./report-element";

export interface ITableElement extends IReportElement{
    tableNumber: number,
    rowsCount: number,
    columnsCount: number,
    verticalTitles?: string,
    horizontalTitles?: string
}