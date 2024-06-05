import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameSimulationService } from './game-simulation.service';
import { CreateGameSimulationDto } from './dto/create-game-simulation.dto';
import { UpdateGameSimulationDto } from './dto/update-game-simulation.dto';

@Controller('game-simulation')
export class GameSimulationController {
  constructor(private readonly gameSimulationService: GameSimulationService) {}

  @Post()
  create(@Body() createGameSimulationDto: CreateGameSimulationDto) {
    return this.gameSimulationService.create(createGameSimulationDto);
  }

  @Get()
  findAll() {
    return this.gameSimulationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameSimulationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameSimulationDto: UpdateGameSimulationDto) {
    return this.gameSimulationService.update(+id, updateGameSimulationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameSimulationService.remove(+id);
  }
}
