import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleError from "./errors/handleError"


//*todo              routers
import clientsRoutes from "./routes/clients.routes"
import contactsRoutes from "./routes/contacts.routes"

const app = express()
app.use(express.json())

app.use('/clients', clientsRoutes)
app.use('/contacts', contactsRoutes)
app.use(handleError)

export default app