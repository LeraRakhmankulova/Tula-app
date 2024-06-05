import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"

export class GameSimulationEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    session_count: number

    @Column()
    iteration_count: number

    @CreateDateColumn()
    createdAt: Date
}
