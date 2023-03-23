import { IUserUpdate } from "../../interfaces/clients";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/client.serializers";

const uptadeUserService = async (id:string, userUpdateData: IUserUpdate, admStatus:boolean, idReqUser:string) => {

    if(!admStatus&&idReqUser!=id){

        throw new AppError('No admin permission', 401)
    }
    console.log(userUpdateData)

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id:id})
    if(!user){
        throw new AppError('user not found ', 404)
    }
    

    const existsEmail = await userRepository.findOneBy({
        email: userUpdateData.email
    })

    if(existsEmail){
        throw new AppError('email already exists ', 400)
    }
    

    const updatedUser = userRepository.create({
        ...user,
        ...userUpdateData
    })
    await userRepository.save(updatedUser)

    const userWithoutPassword  = await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return userWithoutPassword
    
}

export default uptadeUserService 