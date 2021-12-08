import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksDto } from "./dto/books.dto";
import { Book } from "./entity/book.entity"
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { User } from "../users/entity/user.entity";

@ApiTags("Books")
@Controller('books')
export class BooksController {

  constructor(private bookService: BooksService) {
  }

  @ApiOkResponse({type: User, isArray: true, description: 'the users list'})
  @ApiQuery({name: 'name', required: false})
  @Get()
  index(@Query('name') name: string): any {
    return this.bookService.getAll(name);
  }

  @ApiOkResponse({type: User, isArray: false, description: 'show user'})
  @ApiNotFoundResponse()
  @Get(':id')
  show(@Param() id: string): Book {
    const user =  this.bookService.getBook(Number(id));

    if(!user) {
      throw new NotFoundException
    }

    return user;
  }

  @ApiCreatedResponse({type: User})
  @Post()
  store(@Body() body: BooksDto): any {
    return this.bookService.createBook(body);
  }

  @ApiCreatedResponse({type: User})
  @Put("/:id")
  update(@Body() body: BooksDto, @Param("id") id: string): any {
    return this.bookService.updateBook(body, Number(id));
  }

  @Delete("/:id")
  delete(@Param() id: string): Book[] {
    return this.bookService.deleteBook(Number(id));
  }
}
