import { Request,Response } from "express";


import { IAddressRequest, IPropertyReq } from "../interfaces/contacts";


//**impor dos services */
import createPropertyService from "../services/contacts/createProperty.service";
import listPropertiesService from "../services/contacts/listProperties.service";


const createPropertyControler = async (req: Request, res: Response) => {
    const propertyData: IPropertyReq = req.body
    const createProperty = await createPropertyService(propertyData)
    return res.status(201).json(createProperty)
}


const listPropertiesControler = async (req:Request, res:Response ) => {
    const categoryProperties = await listPropertiesService()
    return res.status(200).json(categoryProperties)
}





export {createPropertyControler, listPropertiesControler}