import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class BoardEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({nullable: false})
    owner_id: number

    @Column({default: false})
    is_favorite: boolean

    @Column()
    cover_image: string

    @Column({default: false})
    title: string

    @Column()
    description: string
}