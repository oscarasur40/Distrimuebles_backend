import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrabajadoreDocument = Trabajadore & Document;

@Schema()
export class Trabajadore {
  @Prop({ Required: true })
  nombre: string;
  @Prop({ required: true })
  apellido: string;
  @Prop({ required: true })
  sexo: string;
  @Prop({ required: true })
  fecha_nacimiento: string;

  @Prop({ required: true })
  num_documento: number;
  @Prop({ required: true })
  direccion: string;
  @Prop({ required: true })
  telefono: number;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  usuario: string;
  @Prop({ required: true })
  password: string;
}
export const TrabajadorSchema = SchemaFactory.createForClass(Trabajadore);
