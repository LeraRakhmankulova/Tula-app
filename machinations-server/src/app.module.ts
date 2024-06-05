import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { PoolModule } from './pool/pool.module';
import { TeamModule } from './team/team.module';
import { GameSessionModule } from './game-session/game-session.module';
import { GameSimulationModule } from './game-simulation/game-simulation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Le26ra1703.',
      database: 'tula',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    BoardModule,
    UserModule,
    PoolModule,
    TeamModule,
    GameSessionModule,
    GameSimulationModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
