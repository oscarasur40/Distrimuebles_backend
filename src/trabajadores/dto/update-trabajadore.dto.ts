import { PartialType } from '@nestjs/mapped-types';
import { CreateTrabajadoreDto } from './create-trabajadore.dto';

export class UpdateTrabajadoreDto extends PartialType(CreateTrabajadoreDto) {
  readonly nombre: string;
  readonly apellido: string;
  readonly sexo: string;
  readonly fecha_nacimiento: string;
  readonly num_documento: number;
  readonly direccion: string;
  readonly telefono: number;
  readonly email: string;
  readonly usuario: string;
  readonly password: string;
}
