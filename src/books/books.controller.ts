import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksDto } from "./dto/books.dto";
import { Book } from "./entity/book.entity"

@Controller('books')
export class BooksController {

  constructor(private bookService: BooksService) {
  }

  @Get()
  index(): any {
    return this.bookService.getAll();
  }

  @Get()
  show(@Param() id: string): Book {
    return this.bookService.getBook(Number(id));
  }

  @Post()
  store(@Body() body: BooksDto): any {
    return this.bookService.createBook(body);
  }

  @Put("/:id")
  update(@Body() body: BooksDto, @Param("id") id: string): any {
    return this.bookService.updateBook(body, Number(id));
  }

  @Delete("/:id")
  delete(@Param() id: string): Book[] {
    return this.bookService.deleteBook(Number(id));
  }
}
