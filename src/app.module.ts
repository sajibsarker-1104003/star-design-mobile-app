import { Module } from '@nestjs/common';

import { ConfigModule, } from '@nestjs/config';
import { ClsModule } from 'nestjs-cls';
import { ScheduleModule } from '@nestjs/schedule';

import { PrismaModule } from '@/prisma/prisma.module';


import { UserProxy } from './shared/async-storage';

import { MenuModule } from '@/api/menu/menu.module';


@Module({
	imports: [
		ClsModule.forFeature(UserProxy),
		PrismaModule,
		ConfigModule.forRoot({ isGlobal: true }),
		ScheduleModule.forRoot(),
		MenuModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
