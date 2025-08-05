import * as argon2 from 'argon2';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	constructor(private readonly config: ConfigService) {
		super();
	}

	async onModuleInit() {
		await this.$connect();

		await this.createDefaultMenu();
	}


	private async createDefaultMenu() {
		const defaultMenus = [
			{ menu_id: 21, menu_name: 'Fashion', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-tshirt2"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 22, menu_name: 'Home & Garden', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-home"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 23, menu_name: 'Electronics', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-electronics"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 24, menu_name: 'Furniture', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-furniture"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 25, menu_name: 'Healthy & Beauty', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-heartbeat"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 26, menu_name: 'Gift Ideas', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-gift"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 27, menu_name: 'Toy & Games', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-gamepad"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 28, menu_name: 'Cooking', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-ice-cream"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 29, menu_name: 'Smart Phones', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-ios"></i>', img2: null, type: 1, activity: 1 },
			{ menu_id: 30, menu_name: 'Accessories', meta_desc: null, meta_key: null, page_cn: null, img1: '<i class="w-icon-ruby"></i>', img2: null, type: 1, activity: 1 }
		];

		for (const menu of defaultMenus) {
			await this.menu.upsert({
				where: { menu_id: menu.menu_id },
				update: {},
				create: menu
			});
		}

		console.log('✅ Default Menu items seeded');
	}



	async enableShutdownHooks(app: INestApplication) {
		this.$on('beforeExit', async () => {
			await app.close();
		});
	}

	async clearDatabase() {
		if (this.config.get('NODE_ENV') === 'production') return;

		const models = Reflect.ownKeys(this).filter(
			key =>
				typeof key === 'string' && !key.startsWith('_') && !key.startsWith('$') && key !== 'config'
		);

		return Promise.all(
			models.map(modelKey => {
				return this[modelKey]?.deleteMany?.();
			})
		);
	}
}
