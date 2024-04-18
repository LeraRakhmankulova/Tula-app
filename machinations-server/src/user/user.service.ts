import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async getById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        boards: true
      }
    })
  }

  async create(dto: UserDto) {
    const user = {
      email: dto.email,
      name: dto.name,
    }

    return this.prisma.user.create({
      data: user
    })
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  async getProfile(id: number) {
    const profile = await this.getById(id)
    return profile
  }

  async update(id: number, dto: UserDto) {
    return this.prisma.user.update({
      where: { id },
      data: dto
    })
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
