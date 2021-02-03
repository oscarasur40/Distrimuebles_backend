import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cliente, ClienteDocument } from './entities/cliente.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>,
  ) {}
  create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const creado = new this.clienteModel(createClienteDto);
    return creado.save();
  }

  findAll() {
    return this.clienteModel.find().exec();
  }
  findById(id: number) {
    return this.clienteModel.findById(id);
  }
  findOne(options: Record<string, any>) {
    return this.clienteModel.findOne(options);
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clienteModel.findByIdAndUpdate(id, updateClienteDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.clienteModel.findByIdAndDelete(id);
  }
}
