import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { Cart } from 'src/interfaces/cart.interface';
import products from 'src/mocks/products';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

/* devuelve un array de Products en base al array de numbers.Muy pro */
const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map(index => ({
    ...products[index],
    quantity: 1,
  }))
});

/* fijate que un controlador es una clase */
@Controller('cart')
export class CartController {

  private carts: Record<number,Cart> = {
    1: initialCart([0,2,4]),
    2: initialCart([1,3]),
  };
  
    constructor() {}

  // el decorador @UseGuard protege un controlador/método con un Guard(el que se le pase por argumento).En este caso protegemos la url /cart con el guard JwtAuthGuard(el cual es inyectado por su decorador @Injectable)
  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: []};
  }
  //fijate que todos los decoradores son ejecutados con (),es siempre así ??
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() {id}:{id:string} ):Promise<Cart>{
    const cart = this.carts[req.user.userId];
    /* ojo que el id del body viene como string */
    const cartItem = cart.cartItems.find(item => item.id === +id);
    if(cartItem){
      cartItem.quantity++;
    }else{
      cart.cartItems.push({
        ...products[id],
        quantity: 1,
      });
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req){
    this.carts[req.user.userId] = {cartItems: []};
    return this.carts[req.user.userId];
  }
}
