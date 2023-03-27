import { Request,Response } from "express";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";

//**impor dos services */
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import uptadeContactService from "../services/contacts/uptadeContact.service";
import listContactService from "../services/contacts/listContact.service";

const createContactControler = async (req: Request, res: Response) => {
    const contactData: IContactRequest = req.body
    const createContact = await createContactService(contactData)
    return res.status(201).json(createContact)
}

const listContactControler = async (req:Request, res:Response ) => {
    const listContact = await listContactService()
    return res.status(200).json(listContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const idContact : string = req.params.id
    const deleteContact = await deleteContactService(idContact)
    return res.status(204).json(deleteContact)
}

const uptadeContactController = async (req: Request, res: Response) => { 
    const contactUpdateData: IContactUpdate = req.body
    const idContact : string = req.params.id
    const updateContact = await uptadeContactService(idContact, contactUpdateData) 
    return res.status(200).json(updateContact)
}





export {createContactControler, deleteContactController, uptadeContactController, listContactControler}