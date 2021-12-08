import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("crash course")
    .setDescription("description for crash course")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  await app.listen(3210);
}

bootstrap();
