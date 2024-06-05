import { Module } from '@nestjs/common';
import { GameSessionService } from './game-session.service';
import { GameSessionController } from './game-session.controller';
import { GameSessionEntity } from './entities/game-session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameSimulationEntity } from 'src/game-simulation/entities/game-simulation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameSessionEntity, GameSimulationEntity])],
  controllers: [GameSessionController],
  providers: [GameSessionService],
  exports: [GameSessionService],
})
export class GameSessionModule { }
