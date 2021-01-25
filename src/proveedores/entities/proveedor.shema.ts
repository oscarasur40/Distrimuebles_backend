import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProveedorDocument = Proveedor & Document;

@Schema()
export class Proveedor {
  @Prop({ required: true })
  razon_social: string;

  @Prop({ required: true })
  sector_social: string;

  @Prop()
  tipo_d: string;

  @Prop()
  numero_d: number;

  @Prop()
  direccion: string;

  @Prop()
  telefono: number;

  @Prop()
  email: string;

  @Prop()
  url: string;
}
export const ProveedorSchema = SchemaFactory.createForClass(Proveedor);
