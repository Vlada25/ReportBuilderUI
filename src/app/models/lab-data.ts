import { ILabsTemplate } from "./labs-template";
import { IParagraphElement } from "./report-elements/paragraph-element";
import { IPictureElement } from "./report-elements/picture-element";
import { IReportElement } from "./report-elements/report-element";
import { ITableElement } from "./report-elements/table-element";

export interface ILabData {
    labsTemplate: ILabsTemplate,
    reportElements: IReportElement[],
    paragraphElements: IParagraphElement[],
    pictureElements: IPictureElement[],
    tableElements: ITableElement[]
}