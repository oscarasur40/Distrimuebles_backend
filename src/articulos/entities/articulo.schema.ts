import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticuloDocument = Articulo & Document;

@Schema()
export class Articulo {
  @Prop({ required: true })
  codigo: string;

  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  imagen: string;
}
export const AticuloShema = SchemaFactory.createForClass(Articulo);
