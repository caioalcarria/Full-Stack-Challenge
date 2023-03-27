import { Entity,OneToMany, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import { Contacts } from './contacts.entity'

@Entity('client')
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 50, unique:true})
    email: string

    @Column({length: 50})
    name: string

    @Column({length:50, unique:true})
    phone: string

    @Column({length: 50})
    sector: string

    @Column({length: 800})
    photo: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Contacts, contacts => contacts.client)
    contacts: Contacts[]


}

export {Client}
