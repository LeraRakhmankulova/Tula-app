import { UserEntity } from "src/user/entities/user.entity";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class BoardEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => UserEntity, (user) => user.boards)
    user: UserEntity

    @Column({default: false})
    is_favorite: boolean

    @Column()
    cover_image: string

    @Column({default: false})
    title: string

    @Column()
    description: string
}