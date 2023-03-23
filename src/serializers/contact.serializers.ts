import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IContactRequest, IContactUpdate } from '../interfaces/contacts'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).email().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    sector: yup.string().max(50).required(),
    photo: yup.string().max(100).required(),
    linkedin: yup.string().max(50).required()
    
})

const contactUpdateSerializer: SchemaOf<IContactUpdate> = yup.object().shape({  
    name: yup.string().max(50).notRequired(),
    email: yup.string().max(50).email().notRequired(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired(),
    sector: yup.string().max(50).notRequired(),
    photo: yup.string().max(100).notRequired(),
    linkedin: yup.string().max(50).notRequired()
})





export { contactSerializer, contactUpdateSerializer}