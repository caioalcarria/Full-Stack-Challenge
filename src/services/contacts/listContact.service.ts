import {AppDataSource} from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";


const listContactService = async () => {
    const contactsRepository = AppDataSource.getRepository(Contacts)

    const contactsList = contactsRepository.find({
        relations: {
            client: true
        }
    })


    return contactsList
}

export default listContactService 