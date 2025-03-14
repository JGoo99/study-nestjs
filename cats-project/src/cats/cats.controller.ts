import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { PositiveIntPipe } from 'src/pipes/positiveInt.pipe';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getAllCats() {
    throw new HttpException('api is broken', 500);
    return 'all cats';
  }

  @Get(':id')
  getCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    console.log(typeof id);
    return 'get cat ' + id;
  }

  @Post()
  createCat() {
    return 'cat created';
  }

  @Patch(':id')
  updateCat(@Param('id') param: string) {
    return 'cat ' + param + ' updated';
  }

  @Delete(':id')
  deleteCat(@Param('id') id: any) {
    return 'cat ' + id + ' deleted';
  }
}
