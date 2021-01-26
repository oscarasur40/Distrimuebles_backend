import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Articulo, AticuloShema } from './entities/articulo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Articulo.name, schema: AticuloShema }]),
  ],
  controllers: [ArticulosController],
  providers: [ArticulosService],
})
export class ArticulosModule {}
