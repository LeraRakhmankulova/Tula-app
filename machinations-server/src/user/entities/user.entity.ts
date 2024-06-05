import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string

    @CreateDateColumn()
    createdAt: Date
}