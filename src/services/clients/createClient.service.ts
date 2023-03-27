import { IClientRequest, IClientResponse } from "../../interfaces/clients";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/AppError";



const createClientService = async (clientData : IClientRequest): Promise<IClientResponse> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const clientEmail = await clientRepository.findOneBy({
        email: clientData.email
    })

    const clientPhone = await clientRepository.findOneBy({
        phone: clientData.phone
    })


    if(clientEmail){
        throw new AppError('email already exists ', 409)
    }
    if(clientPhone){
        throw new AppError('phone already exists ', 409)
    }

    
   
    const createClient = clientRepository.create(clientData)
    await clientRepository.save(createClient)
    
    
    
    return createClient
}

export default createClientService 