import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop({ Required: true })
  nombre: string;
  @Prop({ required: true })
  apellido: string;
  @Prop({ required: true })
  sexo: string;
  @Prop({ required: true })
  fecha_nacimiento: string;
  @Prop({ required: true })
  tipo_documento: string;
  @Prop({ required: true })
  num_documento: number;
  @Prop({ required: true })
  telefono: number;
  @Prop({ required: true })
  email: string;
}
export const ClienteSchema = SchemaFactory.createForClass(Cliente);
