import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/decorators/user.decorator';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async profile(@CurrentUser('id') id: string){
    return this.userService.getProfile(+id)
  }

  @Post()
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.update(+id, dto);
  }
}
