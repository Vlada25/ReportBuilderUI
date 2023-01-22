import { ILabsTemplate } from "./labs-template";
import { IPictureElement } from "./report-elements/picture-element";
import { ITableElement } from "./report-elements/table-element";

export interface ILabData {
    labsTemplate: ILabsTemplate,
    pictureElements: IPictureElement[],
    tableElements: ITableElement[]
}