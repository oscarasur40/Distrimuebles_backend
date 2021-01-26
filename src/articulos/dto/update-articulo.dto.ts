import { PartialType } from '@nestjs/mapped-types';
import { CreateArticuloDto } from './create-articulo.dto';

export class UpdateArticuloDto extends PartialType(CreateArticuloDto) {
  readonly codigo: string;
  readonly nombre: string;
  readonly descripcion: string;
  imagen: string;
}
