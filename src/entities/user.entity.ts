import { Entity,OneToMany, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate} from 'typeorm'
import { Contact } from './contacts.entity'

@Entity('users')
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 50, unique:true})
    email: string

    @Column({length: 50})
    name: string

    @Column({length:50})
    phone: string

    @Column({default:false})
    sector: string

    @Column({default:true})
    photo: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Contact, contact => contact.client)
    schedules_users_properties: Schedules_users_properties[]


}

export {User}