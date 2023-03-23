import { Entity, ManyToOne, PrimaryGeneratedColumn, Column} from 'typeorm'
import { User } from './user.entity'
import { Properties } from './contacts.entity'

@Entity('schedules_users_properties')
class Schedules_users_properties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'date', nullable: true})
    date: string

    @Column({type: 'time', nullable: true})
    hour: string

    @ManyToOne(() => Properties, properties => properties.schedules_users_properties)
    properties: Properties
    
    @ManyToOne(() => User, user => user.schedules_users_properties)
    user: User
   
}

export {Schedules_users_properties}