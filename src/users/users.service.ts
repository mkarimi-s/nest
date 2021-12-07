import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entity/user.entity";

@Injectable()
export class UsersService {
  private users: User[] = [];

  findUserById(id: number): any {
    console.log(`trying the find user with id: ${id}`);
    return this.users.find((user) => user.id === id);
  }

  findAll(): User[] {
    return this.users;
  }

  createUser(dto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...dto,
    };
    this.users.push(newUser);

    return newUser;
  }

  deleteUser(id: number): User[] {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }

  updateUser(dto: CreateUserDto, id: number): User[] {
    let index = this.users.findIndex((user) => user.id === id);
    console.log(
      'index is: ' + index,
      this.users[index],
      this.users[index].name,
    );
    this.users[index].name = dto.name;

    return this.users;
  }
}
