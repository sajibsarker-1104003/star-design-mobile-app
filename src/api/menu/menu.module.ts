import { Module } from '@nestjs/common';

import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';

import { PrismaService } from '@/prisma/prisma.service';
import { ControllerErrorHandler, ServiceErrorHandler } from '@/shared/error-handlers';

@Module({
	imports: [],
	controllers: [MenuController],
	providers: [MenuService, PrismaService, ControllerErrorHandler, ServiceErrorHandler],
	exports: [MenuService],
})
export class MenuModule {}
