import { Entity, ManyToOne, OneToOne,JoinColumn,  OneToMany, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate} from 'typeorm'
import { hashSync } from 'bcryptjs'
import { Address } from './addresses.entity'
import { Schedules_users_properties } from './schedules_users_properties.entity'
import { Categories } from './categories.entity'

@Entity('properties')
class Properties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({default:false})
    sold: boolean

    @Column({type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number

    @Column({type:"integer"})
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address) @JoinColumn()
    address: Address

    @OneToMany(() => Schedules_users_properties, schedules_users_properties => schedules_users_properties.properties)
    schedules_users_properties: Schedules_users_properties[]

    @ManyToOne(() => Categories, category => category.properties)
    category: Categories
    
   
}

export {Properties}