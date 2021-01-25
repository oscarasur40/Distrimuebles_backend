import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Bind,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { Proveedor } from './entities/proveedor.shema';
import { json } from 'express';
//import { UpdateProveedoreDto } from './dto/update-proveedore.dto';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Post()
  async create(@Body() createProveedoreDto: CreateProveedoreDto, @Res() res) {
    await this.proveedoresService
      .create(createProveedoreDto)
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Get()
  async findAll(@Res() res) {
    await this.proveedoresService
      .findAll()
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Get('find')
  findOne(@Res() res, @Body() body) {
    const queryConditions = body;
    const todos = this.proveedoresService
      .findOne(queryConditions)
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Get(':id')
  findById(@Param('id') id: number, @Res() res) {
    this.proveedoresService
      .findById(id)
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateProveedoreDto: CreateProveedoreDto,
    @Res() res,
  ) {
    this.proveedoresService
      .update(id, updateProveedoreDto)
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Res() res) {
    return this.proveedoresService
      .remove(id)
      .then((data) => {
        return res.status(HttpStatus.OK).json(data);
      })
      .catch((err) => {
        return res.status(HttpStatus.NOT_FOUND).json(err);
      });
  }
}
