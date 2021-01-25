import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { Proveedor, ProveedorDocument } from './entities/proveedor.shema';

//import { UpdateProveedoreDto } from './dto/update-proveedore.dto';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectModel(Proveedor.name)
    private proveedorModelo: Model<ProveedorDocument>,
  ) {}
  create(createProveedoreDto: CreateProveedoreDto): Promise<Proveedor> {
    const createProveedor = new this.proveedorModelo(createProveedoreDto);
    return createProveedor.save();
  }

  findAll(): Promise<Proveedor[]> {
    return this.proveedorModelo.find().exec();
  }

  findById(id: number) {
    return this.proveedorModelo.findById(id).exec();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  findOne(options: object): Promise<ProveedorDocument> {
    return this.proveedorModelo.findOne(options).exec();
  }

  update(id: number, updateProveedoreDto: CreateProveedoreDto) {
    return this.proveedorModelo
      .findByIdAndUpdate(id, updateProveedoreDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return this.proveedorModelo.findByIdAndDelete(id).exec();
  }
}
