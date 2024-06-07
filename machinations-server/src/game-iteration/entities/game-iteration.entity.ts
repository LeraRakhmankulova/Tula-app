import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GameIteration {
    @PrimaryGeneratedColumn()
    id: number

    
}
