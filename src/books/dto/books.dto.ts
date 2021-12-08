import { ApiProperty } from "@nestjs/swagger";

export class BooksDto {
  @ApiProperty({required: true})
  name: string;
}
