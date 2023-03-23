import AppDataSource from "../../data-source";
import { Properties } from "../../entities/contacts.entity";


const listPropertiesService = async () => {
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const propertiesList = propertiesRepository.find({
        relations: {
            address: true
        }
    })
    return propertiesList
}

export default listPropertiesService 