import { Router } from 'express'
import ensureIdValidMiddleware from '../middlewares/ensureIdValidMiddleware.middleware'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { clientSerializer, clientUpdateSerializer } from '../serializers/client.serializers'
import {
    createClientController,
    listClientsControler,
    deleteClientController,
    uptadeClientController
} from '../controllers/client.controllers'



const clientsRoutes = Router()

clientsRoutes.post('', ensureDataIsValidMiddleware(clientSerializer) , createClientController)

clientsRoutes.get('', ensureIdValidMiddleware, listClientsControler)

clientsRoutes.patch('/:id', ensureIdValidMiddleware,  ensureDataIsValidMiddleware(clientUpdateSerializer), uptadeClientController)
clientsRoutes.delete('/:id',ensureIdValidMiddleware, deleteClientController)



export default clientsRoutes 