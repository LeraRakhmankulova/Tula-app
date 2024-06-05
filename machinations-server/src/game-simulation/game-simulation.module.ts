import { Module } from '@nestjs/common';
import { GameSimulationService } from './game-simulation.service';
import { GameSimulationController } from './game-simulation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameSimulationEntity } from './entities/game-simulation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameSimulationEntity])],
  controllers: [GameSimulationController],
  providers: [GameSimulationService]
})
export class GameSimulationModule {}
