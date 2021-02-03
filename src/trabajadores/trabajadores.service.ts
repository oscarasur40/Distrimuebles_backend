import { Injectable } from '@nestjs/common';
import { CreateTrabajadoreDto } from './dto/create-trabajadore.dto';
import { UpdateTrabajadoreDto } from './dto/update-trabajadore.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Trabajadore,
  TrabajadoreDocument,
} from './entities/trabajadore.schema';
import { Model } from 'mongoose';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectModel(Trabajadore.name)
    private trabajadorModel: Model<TrabajadoreDocument>,
  ) {}
  create(createTrabajadoreDto: CreateTrabajadoreDto): Promise<Trabajadore> {
    return new this.trabajadorModel(createTrabajadoreDto).save();
  }

  findAll() {
    return this.trabajadorModel.find().exec();
  }

  findById(id: number) {
    return this.trabajadorModel.findById(id);
  }
  findOne(options: object) {
    return this.trabajadorModel.findOne(options).exec();
  }

  update(id: number, updateTrabajadoreDto: UpdateTrabajadoreDto) {
    return this.trabajadorModel.findByIdAndUpdate(id, updateTrabajadoreDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.trabajadorModel.findByIdAndDelete(id);
  }
}
