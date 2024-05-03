import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
  Query,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto/pagination-query.dto";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
    //return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
  }

  @Get("flavors")
  findFlavors() {
    return "This action returns all coffees' flavors";
  }

  @Get(":id") // dinamic route parameter
  findOne(@Param("id") id: string) {
    return this.coffeesService.findOne(id);
    //return `This action returns coffee with id: ${id}`
  }

  @Post() // dinamic route parameter
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
    //return body;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
    //return `This action updates #${id} coffee`;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    //return `This action removes #${id} coffee`;
    return this.coffeesService.remove(id);
  }
}
