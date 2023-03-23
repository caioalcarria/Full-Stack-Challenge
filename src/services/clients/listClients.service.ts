import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { listUsersWithoutPassword } from "../../serializers/client.serializers";


const listUsersService = async () => {
    const userRepository = AppDataSource.getRepository(User)
    const usersList = userRepository.find({})



    const returnedData  = await listUsersWithoutPassword.validate(await usersList, {
        stripUnknown: true
    })
    
    return returnedData
}

export default listUsersService 