import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleIngresoDto } from './create-detalle-ingreso.dto';

export class UpdateDetalleIngresoDto extends PartialType(CreateDetalleIngresoDto) {}
