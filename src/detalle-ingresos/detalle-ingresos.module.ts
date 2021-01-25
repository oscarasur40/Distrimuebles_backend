import { Module } from '@nestjs/common';
import { DetalleIngresosService } from './detalle-ingresos.service';
import { DetalleIngresosController } from './detalle-ingresos.controller';

@Module({
  controllers: [DetalleIngresosController],
  providers: [DetalleIngresosService]
})
export class DetalleIngresosModule {}
