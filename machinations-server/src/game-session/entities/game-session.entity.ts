import { Column, PrimaryGeneratedColumn } from "typeorm"

export class GameSessionEntity {
    @PrimaryGeneratedColumn()
    id: number

    simulation_id: number
}
