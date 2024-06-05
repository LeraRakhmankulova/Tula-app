import { BoardEntity } from "src/board/entities/board.entity";
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

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

    @OneToMany(() => BoardEntity, (board) => board.user)
    boards: BoardEntity[]
}