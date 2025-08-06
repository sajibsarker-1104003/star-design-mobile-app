import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { IServiceData, ServiceError } from '@/shared/interfaces';
import { CreateMenuDto, UpdateMenuDto } from './dto';

@Injectable()
export class MenuService {
	constructor(
		private prisma: PrismaService,
	) {}

	menuSelectOptions = {
		menu_id: true,
		menu_name: true,
		meta_desc: true,
		meta_key: true,
		page_cn: true,
		img1: true,
		img2: true,
		type: true,
		activity: true
	};

	async create(createDto: CreateMenuDto): Promise<IServiceData> {
		try {
			const created = await this.prisma.menu.create({
				data: createDto,
				select: this.menuSelectOptions
			});
			return { data: created };
		} catch (e) {
			return { prismaError: e };
		}
	}

	async findAll(): Promise<IServiceData> {
		const cacheKey = 'all_menus';

		try {

			const menus = await this.prisma.menu.findMany({
				select: this.menuSelectOptions
			});

			return { data: menus };
		} catch (e) {
			console.error('[ERROR] findAll menus:', e);
			return { prismaError: e };
		}
	}

	async findOne(menu_id: number): Promise<IServiceData> {

		try {

			const menu = await this.prisma.menu.findUnique({
				where: { menu_id },
				select: this.menuSelectOptions
			});

			if (!menu) {
				return {
					businessError: { type: ServiceError.NOT_FOUND, message: 'Menu not found' }
				};
			}

			return { data: menu };
		} catch (e) {
			console.error(`[ERROR] findOne(${menu_id}):`, e);
			return { prismaError: e };
		}
	}

	async update(menu_id: number, updateDto: UpdateMenuDto): Promise<IServiceData> {
		try {
			const updated = await this.prisma.menu.update({
				where: { menu_id },
				data: updateDto,
				select: this.menuSelectOptions
			});
			return { data: updated };
		} catch (e) {
			return { prismaError: e };
		}
	}

	async remove(menu_id: number): Promise<IServiceData> {
		try {
			await this.prisma.menu.delete({
				where: { menu_id }
			});
			return { data: null };
		} catch (e) {
			return { prismaError: e };
		}
	}
}
