import { IClientUpdate } from "../../interfaces/clients";
import {AppDataSource} from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/AppError";

const uptadeClientService = async (idClient:string, clientUpdateData:IClientUpdate) => {

    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({id:idClient})

    if(!client){
        throw new AppError('user not found ', 404)
    }

    console.log(client.email)
    console.log(clientUpdateData.email)
    if(clientUpdateData.email&&client.email!=clientUpdateData.email){
        const existsEmail = await clientRepository.findOneBy({
        email: clientUpdateData.email
        })
        if(existsEmail){
            throw new AppError('email already exists ', 409)
        }
    }
    if(clientUpdateData.phone&&client.phone!=clientUpdateData.phone){
        const existsPhone = await clientRepository.findOneBy({
        phone: clientUpdateData.phone
        })
        if(clientUpdateData.phone &&existsPhone){
            throw new AppError('phone already exists ', 409)
        }
    }


    const updatedClient = clientRepository.create({
        ...client,
        ...clientUpdateData
    })
    await clientRepository.save(updatedClient)


    return updatedClient
    
}

export default uptadeClientService 