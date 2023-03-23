import { Request,Response } from "express";
import { IClientRequest, IClientUpdate } from "../interfaces/clients";


//**impor dos services */
import createClientService from "../services/clients/createClient.service";
import listClientsService from "../services/clients/listClients.service";
import deleteClientService from "../services/clients/deleteClient.service";
import uptadeClientService from "../services/clients/uptadeClient.service";



const createClientController = async (req: Request, res: Response) => {
    const clientData: IClientRequest = req.body
    const createClient = await createClientService(clientData)
    return res.status(201).json(createClient)
}

const listClientsControler = async (req:Request, res:Response ) => {
    const listClient = await listClientsService()
    return res.status(200).json(listClient)
}

const deleteClientController = async (req: Request, res: Response) => {
    const idClient : string = req.params.id
    const deleteClient = await deleteClientService(idClient)
    return res.status(204).json(deleteClient)
}

const uptadeClientController = async (req: Request, res: Response) => { 
    const clientUpdateData: IClientUpdate = req.body
    const idClient : string = req.params.id
    const updateUser = await uptadeClientService(idClient, clientUpdateData) 
    return res.status(200).json(updateUser)
}

export {createClientController, listClientsControler, deleteClientController, uptadeClientController}