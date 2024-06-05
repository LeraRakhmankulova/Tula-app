import { Module } from '@nestjs/common';
import { GameSessionService } from './game-session.service';
import { GameSessionController } from './game-session.controller';
import { GameSessionEntity } from './entities/game-session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GameSessionEntity])],
  controllers: [GameSessionController],
  providers: [GameSessionService]
})
export class GameSessionModule {}
