import { Entity, OneToMany, PrimaryGeneratedColumn, Column} from 'typeorm'
import { User } from './user.entity'
import { Properties } from './contacts.entity'

@Entity('categories')
class Categories {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 50, unique: true})
    name: string


    @OneToMany(() => Properties, properties => properties.category)
    properties: Properties[]

   
}

export {Categories}