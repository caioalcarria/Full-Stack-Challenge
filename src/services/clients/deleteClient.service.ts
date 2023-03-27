import {AppDataSource} from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/AppError";



const deleteClientService = async (idClient:string) => {

    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({id:idClient})
    
    if(!client){
        throw new AppError('client not found ', 404)
    }

    await clientRepository.delete({id:idClient})   

    return {}

}

export default deleteClientService 