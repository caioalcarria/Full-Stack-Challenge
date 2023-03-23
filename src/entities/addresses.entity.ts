import { Entity, ManyToOne, OneToOne,JoinColumn,  OneToMany, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate} from 'typeorm'
import { hashSync } from 'bcryptjs'
import { Properties } from './contacts.entity'

@Entity('address')
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string



    @Column({length: 50})
    district: string

    @Column({length: 8})
    zipCode: string

    @Column({length: 2})
    number: string

    @Column({length: 25})
    city: string

    @Column({length: 25})
    state: string

    




   
}

export {Address}