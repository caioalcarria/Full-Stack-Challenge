import { IContactUpdate } from "../../interfaces/contacts";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppError";
import { Client } from "../../entities/clients.entity";

const uptadeContactController = async (idContact:string, contactUpdateData:IContactUpdate) => {

    const ContactsRepository = AppDataSource.getRepository(Contacts)
    const clientRepository = AppDataSource.getRepository(Client);


    const contacts = await ContactsRepository.findOneBy({id:idContact})
    if(!contacts){
        throw new AppError('contacts not found ', 404)
    }


    if(contactUpdateData.email&&contacts.email!=contactUpdateData.email){
        const existsEmail = await ContactsRepository.findOneBy({
        email: contactUpdateData.email
        })
        if(existsEmail){
            throw new AppError('email already exists ', 409)
        }
    }
    if(contactUpdateData.phone&&contacts.phone!=contactUpdateData.phone){
        const existsPhone = await ContactsRepository.findOneBy({
        phone: contactUpdateData.phone
        })
        if(contactUpdateData.phone &&existsPhone){
            throw new AppError('phone already exists ', 409)
        }
    }



    const checkIfValidUUID = (str: string) => {
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        return regexExp.test(str);
    };
    const uuidStatus = checkIfValidUUID(contactUpdateData.clientId);

    if (contactUpdateData.clientId && !uuidStatus) {
        throw new AppError('Invalid ID', 404);
    }


    let client: any = contacts.client;
    if (contactUpdateData.clientId) {
        client = await clientRepository.findOneBy({ id: contactUpdateData.clientId });
        if (!client) {
            throw new AppError('Client not found', 404);
        }
    }


    const uptadeContact = ContactsRepository.create({
        ...contacts,
        ...contactUpdateData,
        client:client
    })
    await ContactsRepository.save(uptadeContact)


    return uptadeContact
    
}

export default uptadeContactController 