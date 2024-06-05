import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardEntity } from './entities/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(BoardEntity)
  private boardRepository: Repository<BoardEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async create(@Body() boardDto: CreateBoardDto, userId: number) {
    const user = await this.userRepository.findOneById(userId);
    if (!user) {
        throw new NotFoundException('User not found');
    }

    const board = this.boardRepository.create({
      ...boardDto,
      users: [user],
  });

  return this.boardRepository.save(board);
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
