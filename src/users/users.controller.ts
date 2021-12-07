import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entity/user.entity";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Get("temp")
  getTempUsers(): any {
    return [{ id: 0 }];
  }

  @Get("temp/:id")
  getTempUserById(@Param("id") id: string): any {
    // return { id };
    return { id: Number(id) };
  }

  @Get(":id")
  show(@Param("id") id: string): any {
    //TODO: auto parsing id
    return this.userService.findUserById(Number(id));
  }

  @Get()
  index(): User[] {
    return this.userService.findAll();
  }

  @Post()
  store(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }

  @Delete(":id")
  destroy(@Param("id") id: string) {
    console.log(`'del' with id ${id}`);
    return this.userService.deleteUser(Number(id));
  }

  @Put(':id')
  update(@Body() body: CreateUserDto, @Param("id") id: string) {
    return this.userService.updateUser(body, Number(id));
  }
}
