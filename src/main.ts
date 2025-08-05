import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { TransformInterceptor } from '@/shared/response/transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '@/app.module';
import { json, urlencoded } from 'express';
import { AllExceptionsFilter } from './shared/response/all-exceptions.filter';

const configService = new ConfigService();

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
		logger: ['debug', 'error', 'warn']
	});

	app.setGlobalPrefix('api');



	app.useGlobalInterceptors(new TransformInterceptor());

	app.useGlobalFilters(new AllExceptionsFilter());

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			exceptionFactory: errors => {
				const messages = errors.flatMap(err => Object.values(err.constraints || {}));
				return new BadRequestException(messages);
			}
		})
	);

	app.use(json({ limit: '50mb' }));
	app.use(urlencoded({ extended: true, limit: '50mb' }));

	const SWAGGER_ENVS = ['local', 'dev', 'development', 'staging'];
	if (SWAGGER_ENVS.includes(configService.get('NODE_ENV'))) {
		const config = new DocumentBuilder()
			.setTitle('stardesign')
			.setDescription('The stardesign API description')
			.setVersion('1.0.0')
			.addTag('stardesign')
			.addBearerAuth()
			.build();

		const options: SwaggerDocumentOptions = {
			operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
		};

		const document = SwaggerModule.createDocument(app, config, options);
		SwaggerModule.setup('swagger', app, document, {
			useGlobalPrefix: true
		});
	}

	await app.listen(configService.get('BE_PORT') || 8080);
}
bootstrap();
