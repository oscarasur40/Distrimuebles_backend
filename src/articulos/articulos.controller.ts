import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete, Res, HttpStatus,
} from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import {get} from "http";

@Controller('articulos')
export class ArticulosController {
  constructor(private readonly articulosService: ArticulosService) {}

  @Post()
  create(@Body() createArticuloDto: CreateArticuloDto, @Res() res) {
    return this.articulosService
      .create(createArticuloDto)
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Get()
  findAll() {
    return this.articulosService.findAll();
  }
  @Get('find')
  findOne(@Body() body) {
    return this.articulosService.findOne(body);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.articulosService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateArticuloDto: UpdateArticuloDto,
  ) {
    return this.articulosService.update(id, updateArticuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articulosService.remove(id);
  }
}
