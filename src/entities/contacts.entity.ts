import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import { Client } from './clients.entity'

@Entity('contacts')
class Contacts {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 50, unique:true})
    email: string

    @Column({length: 50})
    name: string

    @Column({length: 50, unique:true})
    phone: string

    @Column({length: 50})
    sector: string

    @Column({length: 100})
    linkedin: string

    @Column({length: 800})
    photo: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Client, client => client.contacts)
    client: Client
    
   
}

export {Contacts}
