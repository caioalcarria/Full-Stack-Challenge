import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppError";



const deleteContactService = async (idContact:string) => {

    const contactsRepository = AppDataSource.getRepository(Contacts)
    const contact = await contactsRepository.findOneBy({id:idContact})
    
    if(!contact){
        throw new AppError('contact not found ', 404)
    }

    await contactsRepository.delete({id:idContact})

    return {}

}

export default deleteContactService 