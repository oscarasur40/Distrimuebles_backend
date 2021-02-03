import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  readonly nombre: string;
  readonly apellido: string;
  readonly sexo: string;
  readonly fecha_nacimiento: string;
  readonly tipo_documento: string;
  readonly num_documento: number;
  readonly telefono: number;
  readonly email: string;
}
