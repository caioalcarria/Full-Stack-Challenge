import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IClientRequest, IClientUpdate } from '../interfaces/clients/index'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const clientSerializer: SchemaOf<IClientRequest> = yup.object().shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).email().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    sector: yup.string().max(50).required(),
    photo: yup.string().max(800).required()
    
})

const clientUpdateSerializer: SchemaOf<IClientUpdate> = yup.object().shape({  
    name: yup.string().max(50).notRequired(),
    email: yup.string().max(50).email().notRequired(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired(),
    sector: yup.string().max(50).notRequired(),
    photo: yup.string().max(800).notRequired()
})





export { clientSerializer, clientUpdateSerializer}
