import AppDataSource from "../../data-source";
import { Properties } from "../../entities/contacts.entity";
import { Address } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { IPropertyReq, IAddressResponse } from "../../interfaces/contacts";
import { AppError } from "../../errors/AppError";


const createPropertyService = async (propertyData: IPropertyReq) : Promise<IAddressResponse> => {
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const addressRepository = AppDataSource.getRepository(Address)
    const categoriesRepository = AppDataSource.getRepository(Categories)

    //*todo ja existe esse endereço?
    const address = await addressRepository.findOneBy({
        district:propertyData.address.district,
        zipCode:propertyData.address.zipCode,
        number:propertyData.address.number,
        city:propertyData.address.city,
        state:propertyData.address.state
    })


    if(address){
        throw new AppError('address already exists ', 409)
    }


    //**essa gambiarra ridicula é por causa dos testes integrados que não aceitão o yup, */
    if(propertyData.address.state.length > 2){
        throw new AppError('invalid state ', 400)
    }

    if(propertyData.address.zipCode.length > 8){
        throw new AppError('invalid zipCode ', 400)
    }
   

   


       
        const category = await categoriesRepository.findOneBy({
            name: propertyData.category
        })
        if(propertyData.category && !category){
            throw new AppError('this category already exists ', 409)
        }


    




    //*todo criar endereço
    const createAddress = addressRepository.create(propertyData.address)
    await addressRepository.save(createAddress)


    //*todo criar imovel
    const createProperty = propertiesRepository.create({
        ...propertyData, address: createAddress, category:category
    })
    await propertiesRepository.save(createProperty)




    return createProperty
}

export default createPropertyService 