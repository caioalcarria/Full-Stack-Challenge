import { IUserRequest, IUserResponse } from "../../interfaces/clients";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/client.serializers";


const createUserService = async (userData : IUserRequest): Promise<IUserResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: userData.email
    })

    if(user){
        throw new AppError('email already exists ', 409)
    }
   
    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)
    
    const userWithoutPassword  = await userWithoutPasswordSerializer.validate(createUser, {
        stripUnknown: true
    })
    
    
    
    return userWithoutPassword
}

export default createUserService 