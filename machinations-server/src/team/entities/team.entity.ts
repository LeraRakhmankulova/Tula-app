import { UserEntity } from "src/user/entities/user.entity"
import { CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TeamEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @ManyToMany(() => UserEntity)
    @JoinTable()
    categories: UserEntity[]
}