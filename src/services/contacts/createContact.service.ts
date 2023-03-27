import { IContactRequest, IContactResponse } from "../../interfaces/contacts";
import {AppDataSource} from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/AppError";



const createContactService = async (contactData: IContactRequest): Promise<IContactResponse> => {
    const ContactsRepository = AppDataSource.getRepository(Contacts);
    const clientRepository = AppDataSource.getRepository(Client);

    
    const contactEmail = await ContactsRepository.findOneBy({ email: contactData.email });
    const contactPhone = await ContactsRepository.findOneBy({ phone: contactData.phone });

    if (contactEmail) {
        throw new AppError('Email already exists', 409);
    }
    if (contactPhone) {
        throw new AppError('Phone already exists', 409);
    }

    
    const checkIfValidUUID = (str: string) => {
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        return regexExp.test(str);
    };
    const uuidStatus = checkIfValidUUID(contactData.clientId);

    if (contactData.clientId && !uuidStatus) {
        throw new AppError('Invalid ID', 404);
    }


    let client: any = null;
    if (contactData.clientId) {
        client = await clientRepository.findOneBy({ id: contactData.clientId });
        if (!client) {
            throw new AppError('Client not found', 404);
        }
    }


    const createContact = ContactsRepository.create({ ...contactData, client: client });
    await ContactsRepository.save(createContact);
    
    return createContact;
};

export default createContactService 