import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardEntity } from './entities/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(BoardEntity)
  private boardRepository: Repository<BoardEntity>) { }

  async create(@Body() boardDto: CreateBoardDto) {
    return this.boardRepository.save({
      is_favorite: boardDto.is_favorite ,
      cover_image: boardDto.cover_image,
      title: boardDto.title,
      description: boardDto.description
    });
  }

  async findAll() {
    return this.boardRepository.find();
  }

  async findOneById(id: number) {
    const found = await this.boardRepository.findOneBy({ id })
    if (!found) throw new NotFoundException("Not Found")
    return found;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const found = this.boardRepository.findOneBy({ id })
    if (!found) throw new NotFoundException("Not Found")
    return this.boardRepository.update(id, updateBoardDto);
  }

  async remove(id: number) {
    return this.boardRepository.delete(id);
  }
}
