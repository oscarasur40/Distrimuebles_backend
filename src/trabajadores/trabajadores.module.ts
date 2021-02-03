import { Module } from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { TrabajadoresController } from './trabajadores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trabajadore, TrabajadorSchema } from './entities/trabajadore.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Trabajadore.name, schema: TrabajadorSchema },
    ]),
  ],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService]
})
export class TrabajadoresModule {}
