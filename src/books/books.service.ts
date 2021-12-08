import { Injectable } from "@nestjs/common";
import { BooksDto } from "./dto/books.dto";
import { Book} from "./entity/book.entity";

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  getAll(name?: string): any {
    let results = [];
    if(name) {
      results = this.books.filter(user => user.name === name);
    }else {
      results = this.books;
    }
    return results;
  }

  createBook(body: BooksDto): any {
    const book = { id: Date.now(), name: body.name };
    this.books.push(book);

    return this.books;
  }

  updateBook(body: BooksDto, id: number): any {
    let index = this.books.findIndex(user => user.id === id);
    this.books[index].name = body.name;

    return this.books;
  }

  deleteBook(id: number): Book[] {
    let index = this.books.findIndex(book => book.id === id)
    this.books.splice(index, 1);
    return this.books;
  }

  getBook(id: number): Book {
    return this.books.filter(book => book.id === id)[0];
  }
}
