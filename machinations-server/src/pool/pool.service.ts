import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePoolDto } from './dto/create-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PoolEntity } from './entities/pool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoolService {
  constructor(@InjectRepository(PoolEntity) private poolRepository: Repository<PoolEntity>
  ) { }

  async create(createPoolDto: CreatePoolDto) {
    return this.poolRepository.save(createPoolDto);
  }

  async findAll() {
    return this.poolRepository.find();
  }

  async findOne(id: number) {
    const found = this.poolRepository.findOne(
      {
        where: { id },
        relations: {
          game_session: true,
        }
      }
    )
    if (!found) throw new NotFoundException("Not Found")
    return found;
  }

  async update(id: number, updatePoolDto: UpdatePoolDto) {
    const found = this.poolRepository.findOneBy({ id })
    if (!found) throw new NotFoundException("Not Found")
    return this.poolRepository.update(id, updatePoolDto);
  }

  async remove(id: number) {
    return this.poolRepository.delete(id);
  }
}
