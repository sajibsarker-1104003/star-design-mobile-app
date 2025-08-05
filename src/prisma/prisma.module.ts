import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserProxy } from '@/shared/async-storage';
import { ConfigModule } from '@nestjs/config';


@Global()
@Module({
	providers: [
		PrismaService,
		UserProxy
	],
	exports: [PrismaService],
	imports: [ConfigModule]
})
export class PrismaModule {}
