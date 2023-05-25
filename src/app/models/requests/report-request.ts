import { IPersonalData } from "../personal-data"
import { IPictureElementRequest } from "./picture-element-request"
import { ITableElementRequest } from "./table-element-request"

export interface IReportRequest {
    personalData?: IPersonalData
    pictureElements?: IPictureElementRequest[]
    tableElements?: ITableElementRequest[]
}