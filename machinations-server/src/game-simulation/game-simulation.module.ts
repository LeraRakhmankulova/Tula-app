import { Module } from '@nestjs/common';
import { GameSimulationService } from './game-simulation.service';
import { GameSimulationController } from './game-simulation.controller';

@Module({
  controllers: [GameSimulationController],
  providers: [GameSimulationService]
})
export class GameSimulationModule {}
