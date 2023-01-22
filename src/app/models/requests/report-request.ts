import { IPersonalData } from "../personal-data"
import { IPictureElementRequest } from "./picture-element-request"

export interface IReportRequest {
    personalData?: IPersonalData
    pictureElements?: IPictureElementRequest[]
}