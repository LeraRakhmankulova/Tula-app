import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity)
  private userRepository: Repository<UserEntity>) { }

  async create(@Body() userDto: CreateUserDto) {
    return this.userRepository.save({
      firstname: userDto.firstname,
      lastname: userDto.lastname,
      email: userDto.email,
      password: userDto.password
    });
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOneById(id: number) {
    const found = await this.userRepository.findOneBy({ id })
    if (!found) throw new NotFoundException("Not Found")
    return found;
  }

  async findOneByEmail(email: string) {
    const found = await this.userRepository.findOneBy({ email })
    if (!found) throw new NotFoundException("Not Found")
    return found;
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const found = this.userRepository.findOneBy({ id })
    if (!found) throw new NotFoundException("Not Found")
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
