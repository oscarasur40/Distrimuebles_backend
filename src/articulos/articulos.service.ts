import { Injectable } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Articulo, ArticuloDocument } from './entities/articulo.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticulosService {
  constructor(
    @InjectModel(Articulo.name) private articuloModel: Model<ArticuloDocument>,
  ) {}

  create(createArticuloDto: CreateArticuloDto): Promise<Articulo> {
    const crearArticulo = new this.articuloModel(createArticuloDto);
    return crearArticulo.save();
  }

  findAll(): Promise<Articulo[]> {
    return this.articuloModel.find().exec();
  }

  findById(id: number): Promise<Articulo> {
    return this.articuloModel.findById(id).exec();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  findOne(options: object) {
    return this.articuloModel.findOne(options).exec();
  }

  update(id: number, updateArticuloDto: UpdateArticuloDto) {
    return this.articuloModel.findByIdAndUpdate(id, updateArticuloDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.articuloModel.findByIdAndDelete(id).exec();
  }
}
