import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PoolEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    value: number
    
    @Column()
    session_id
}