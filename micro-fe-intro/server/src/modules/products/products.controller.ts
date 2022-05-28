import { Controller, Get, Param } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import products from 'src/mocks/products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get("/:id") // parece que es indiferente usar :id o /:id en el @Get
  async show(@Param('id')id:string): Promise<Product> {
    return products.find(product => product.id === +id);
  }
}
