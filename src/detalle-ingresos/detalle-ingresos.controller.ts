import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DetalleIngresosService } from './detalle-ingresos.service';
import { CreateDetalleIngresoDto } from './dto/create-detalle-ingreso.dto';
import { UpdateDetalleIngresoDto } from './dto/update-detalle-ingreso.dto';

@Controller('detalle-ingresos')
export class DetalleIngresosController {
  constructor(private readonly detalleIngresosService: DetalleIngresosService) {}

  @Post()
  create(@Body() createDetalleIngresoDto: CreateDetalleIngresoDto) {
    return this.detalleIngresosService.create(createDetalleIngresoDto);
  }

  @Get()
  findAll() {
    return this.detalleIngresosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleIngresosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDetalleIngresoDto: UpdateDetalleIngresoDto) {
    return this.detalleIngresosService.update(+id, updateDetalleIngresoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleIngresosService.remove(+id);
  }
}
