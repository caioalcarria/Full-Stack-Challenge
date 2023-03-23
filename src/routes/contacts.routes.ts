import { Router } from 'express'
import ensureIdValidMiddleware from '../middlewares/ensureIdValidMiddleware.middleware'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { contactSerializer, contactUpdateSerializer } from '../serializers/contact.serializers'

import { 
    createContactControler,
    uptadeContactController,
    deleteContactController 
} from '../controllers/contact.controllers'



const contactsRoutes = Router()

contactsRoutes.post('',ensureDataIsValidMiddleware(contactSerializer), createContactControler )

contactsRoutes.patch('/:id', ensureIdValidMiddleware,  ensureDataIsValidMiddleware(contactUpdateSerializer), uptadeContactController)
contactsRoutes.delete('/:id',ensureIdValidMiddleware, deleteContactController)


export default contactsRoutes 