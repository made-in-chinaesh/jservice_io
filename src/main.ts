import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { ValidationPipe } from './pipes/validation.pipe'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const PORT = process.env.PORT || 5000

	const config = new DocumentBuilder()
		.setTitle('JService IO')
		.setDescription('The JService IO api documentation')
		.setVersion('1.0')
		.addTag('jserviceio')
		.build()

	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('api/docs', app, document)

	app.enableCors()
	app.setGlobalPrefix('api')
	app.useGlobalPipes(new ValidationPipe())
	await app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}
bootstrap()
