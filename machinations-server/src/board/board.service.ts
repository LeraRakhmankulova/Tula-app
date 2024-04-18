import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BoardDto } from './board.dto';
import { connect } from 'http2';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) { }

  async create(dto: BoardDto, owner_id: string) {
    const board = {
      isFavorite: dto.isFavorite,
      coverImage: dto.coverImage,
      title: dto.title,
      description: dto.description,
      countComponents: dto.countComponents,
      ownerId: +owner_id
    }

    return this.prisma.board.create({
      data: board
    })
  }

  findAll() {
    return `This action returns all board`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  // update(id: number, updateBoardDto: UpdateBoardDto) {
  //   return `This action updates a #${id} board`;
  // }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
