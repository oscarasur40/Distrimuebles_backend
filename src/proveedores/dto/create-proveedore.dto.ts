import { Prop } from '@nestjs/mongoose';

export class CreateProveedoreDto {
  readonly razon_social: string;
  readonly sector_social: string;
  readonly tipo_d: string;
  readonly numero_d: number;
  readonly direccion: string;
  readonly telefono: number;
  readonly email: string;
  readonly url: string;
}
