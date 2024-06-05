import { Injectable } from '@nestjs/common';
import { CreateGameSimulationDto } from './dto/create-game-simulation.dto';
import { UpdateGameSimulationDto } from './dto/update-game-simulation.dto';

@Injectable()
export class GameSimulationService {
  create(createGameSimulationDto: CreateGameSimulationDto) {
    return 'This action adds a new gameSimulation';
  }

  findAll() {
    return `This action returns all gameSimulation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameSimulation`;
  }

  update(id: number, updateGameSimulationDto: UpdateGameSimulationDto) {
    return `This action updates a #${id} gameSimulation`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameSimulation`;
  }
}
