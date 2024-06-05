import { Module } from '@nestjs/common';
import { PoolService } from './pool.service';
import { PoolController } from './pool.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoolEntity } from './entities/pool.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PoolEntity])],
  controllers: [PoolController],
  providers: [PoolService]
})
export class PoolModule {}
