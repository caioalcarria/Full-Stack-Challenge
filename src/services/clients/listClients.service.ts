import AppDataSource from "../../data-source";
import { Client } from "../../entities/clients.entity";


const listClientsService = async () => {
    const clientRepository = AppDataSource.getRepository(Client)

    const clientList = clientRepository.find({
        relations: {
            contacts: true
        }
    })


    return clientList
}

export default listClientsService 