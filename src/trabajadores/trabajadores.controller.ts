import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { CreateTrabajadoreDto } from './dto/create-trabajadore.dto';
import { UpdateTrabajadoreDto } from './dto/update-trabajadore.dto';

@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}

  @Post()
  create(@Body() createTrabajadoreDto: CreateTrabajadoreDto) {
    return this.trabajadoresService.create(createTrabajadoreDto);
  }

  @Get()
  findAll() {
    return this.trabajadoresService.findAll();
  }

  @Get('find')
  findOne(@Body() body) {
    return this.trabajadoresService.findOne(body);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.trabajadoresService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateTrabajadoreDto: UpdateTrabajadoreDto,
  ) {
    return this.trabajadoresService.update(id, updateTrabajadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.trabajadoresService.remove(id);
  }
}
