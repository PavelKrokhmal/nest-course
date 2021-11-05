import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipe/validation.pipe";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('NEST-COURSE')
        .setDescription('REST API documentation')
        .setVersion('1.0.0')
        .addTag('PAVEL KROKHMAL')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    // app.useGlobalGuards()
    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log('Server started on port = ' + PORT))
}

start()