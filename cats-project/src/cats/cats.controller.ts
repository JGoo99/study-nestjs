import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getAllCats() {
    return "all cats";
  }

  @Get(":id")
  getCat(@Param() id: string) {
    return "get cat " + id;
  }

  @Post()
  createCat() {
    return "cat created";
  }

  @Patch(":id")
  updateCat(@Param("id") param: string) {
    return "cat " + param + " updated";
  }

  @Delete(":id")
  deleteCat(@Param("id") id: any) {
    return "cat " + id + " deleted";
  }
}
