import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesModule } from './clientes/clientes.module';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';
import { ArticulosModule } from './articulos/articulos.module';
import { IngresosModule } from './ingresos/ingresos.module';
import { DetalleIngresosModule } from './detalle-ingresos/detalle-ingresos.module';
import { VentasModule } from './ventas/ventas.module';
import { DetalleVentasModule } from './detalle-ventas/detalle-ventas.module';

@Module({
  imports: [
    ProveedoresModule,
    MongooseModule.forRoot(
      'mongodb+srv://dbdistrimuebles:40730distrimuebles@distrimuebles.4r16w.mongodb.net/dbdistrimuebles?retryWrites=true&w=majority',
    ),
    ClientesModule,
    TrabajadoresModule,
    ArticulosModule,
    IngresosModule,
    DetalleIngresosModule,
    VentasModule,
    DetalleVentasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
