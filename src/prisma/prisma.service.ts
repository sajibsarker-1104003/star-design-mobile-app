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
		await this.createDefaultSubMenus();
		await this.createDefaultSlideImages();
		await this.productWithCateAndSubCat();
	}

	private async createDefaultMenu() {
		const defaultMenus = [
			{
				menu_id: 21,
				menu_name: 'Fashion',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-tshirt2"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 22,
				menu_name: 'Home & Garden',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-home"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 23,
				menu_name: 'Electronics',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-electronics"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 24,
				menu_name: 'Furniture',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-furniture"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 25,
				menu_name: 'Healthy & Beauty',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-heartbeat"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 26,
				menu_name: 'Gift Ideas',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-gift"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 27,
				menu_name: 'Toy & Games',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-gamepad"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 28,
				menu_name: 'Cooking',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-ice-cream"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 29,
				menu_name: 'Smart Phones',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-ios"></i>',
				img2: null,
				type: true,
				activity: true
			},
			{
				menu_id: 30,
				menu_name: 'Accessories',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: '<i class="w-icon-ruby"></i>',
				img2: null,
				type: true,
				activity: true
			}
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

	private async createDefaultSubMenus() {
		const defaultSubMenus = [
			{
				sub_menu_id: 101,
				sub_menu: "Men's Fashion",
				menu_id: 21,
				menu_name: 'Fashion',
				meta_desc: null,
				meta_key: null,
				page_cn: null,
				img1: null,
				img2: null,
				activity: true
			}
			// Add more submenu items here
		];

		for (const subMenu of defaultSubMenus) {
			await this.subMenu.upsert({
				where: { sub_menu_id: subMenu.sub_menu_id },
				update: {},
				create: subMenu
			});
		}
		console.log('✅ Default SubMenu items seeded');
	}

	async createDefaultSlideImages() {
		const defaultSlides = [
			{
				id: 17,
				title_one: 'Silver Ornaments',
				title_two: 'পবিত্র মাহে রমজান এবং ঈদ উপলক্ষে স্পেশাল ডিসকাউন্ট...',
				img1: 'https://imarket.com.bd/assets/images/bnr1.png',
				img2: 'https://imarket.com.bd/assets/images/bnr1.png',
				url: 'welltodobd.com/admin/update_category/1/success',
				time: new Date('2021-04-26T14:34:24')
			},
			{
				id: 18,
				title_one: 'Gold Ornaments',
				title_two: 'পবিত্র মাহে রমজান এবং ঈদ উপলক্ষে স্পেশাল ডিসকাউন্ট...',
				img1: 'https://imarket.com.bd/assets/images/cfds.png',
				img2: 'https://imarket.com.bd/assets/images/cfds.png',
				url: 'welltodobd.com/admin/update_category/2/success',
				time: new Date('2021-04-26T14:54:24')
			}
		];

		for (const slide of defaultSlides) {
			await this.slideImage.upsert({
				where: { id: slide.id },
				update: {},
				create: slide
			});
		}

		console.log('✅ Default slide images seeded');
	}

	async productWithCateAndSubCat() {
		// 1. Seed Categories
		const categoriesData = [
			{
				name: 'Fashion',
				description: 'Clothing and apparel',
				img_url:
					'https://images.unsplash.com/photo-1732492211688-b1984227af93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				name: 'Electronics',
				description: 'Gadgets and devices',
				img_url:
					'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				name: 'Home & Garden',
				description: 'Furniture and decor',
				img_url:
					'https://plus.unsplash.com/premium_photo-1678836292816-fdf0ac484cf1?q=80&w=1103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				name: 'Sports',
				description: 'Sports gear and equipment',
				img_url:
					'https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				name: 'Toys & Games',
				description: 'Fun and games for kids',
				img_url:
					'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG95cyUyMGFuZCUyMGdhbWVzfGVufDB8fDB8fHww'
			},
			{
				name: 'Beauty',
				description: 'Skincare and cosmetics',
				img_url:
					'https://media.istockphoto.com/id/2153818482/photo/skin-care-is-the-ultimate-beauty-care-of-skin-at-home-woman-product-and-skin-for-cosmetics.webp?a=1&b=1&s=612x612&w=0&k=20&c=5LhUT2CWIC6lq3HnVfKi_POHD6L7bd1ZeHfaWcbVeRU='
			},
			{
				name: 'Automotive',
				description: 'Car accessories and parts',
				img_url:
					'https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D'
			}
		];

		const categories = [];
		for (const category of categoriesData) {
			const cat = await this.category.upsert({
				where: { name: category.name },
				update: {},
				create: category
			});
			categories.push(cat);
		}

		// 2. Seed Subcategories (example 2 per category)
		const subcategoriesData = [
			{
				name: 'Men',
				categoryName: 'Fashion',
				img_url:
					'https://plus.unsplash.com/premium_photo-1658506787944-7939ed84aaf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJTIwRmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'
			},
			{
				name: 'Women',
				categoryName: 'Fashion',
				img_url:
					'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29NZW4lMjBGYXNoaW9ufGVufDB8fDB8fHww'
			},
			{
				name: 'Mobile Phones',
				categoryName: 'Electronics',
				img_url:
					'https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmVzfGVufDB8fDB8fHww'
			},
			{
				name: 'Laptops',
				categoryName: 'Electronics',
				img_url:
					'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D'
			},
			{
				name: 'Furniture',
				categoryName: 'Home & Garden',
				img_url:
					'https://plus.unsplash.com/premium_photo-1688125414593-391cf90f3103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnVybml0dXJlfGVufDB8fDB8fHww'
			},
			{
				name: 'Decor',
				categoryName: 'Home & Garden',
				img_url:
					'https://plus.unsplash.com/premium_photo-1686090446908-60fbb45f2805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3J8ZW58MHx8MHx8fDA%3D'
			},
			{
				name: 'Outdoor',
				categoryName: 'Sports',
				img_url:
					'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D'
			},
			{
				name: 'Indoor',
				categoryName: 'Sports',
				img_url:
					'https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yfGVufDB8fDB8fHww'
			},
			{
				name: 'Action Figures',
				categoryName: 'Toys & Games',
				img_url:
					'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aW9uJTIwZmlndXJlc3xlbnwwfHwwfHx8MA%3D%3D'
			},
			{
				name: 'Board Games',
				categoryName: 'Toys & Games',
				img_url:
					'https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hcmQlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D'
			},
			{
				name: 'Makeup',
				categoryName: 'Beauty',
				img_url:
					'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwfGVufDB8fDB8fHww'
			},
			{
				name: 'Skincare',
				categoryName: 'Beauty',
				img_url:
					'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8fDA%3D'
			},
			{
				name: 'Car Accessories',
				categoryName: 'Automotive',
				img_url:
					'https://images.unsplash.com/photo-1646527825109-76a811515a91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FyJTIwYWNjZXNvcmllc3xlbnwwfHwwfHx8MA%3D%3D'
			},
			{
				name: 'Car Parts',
				categoryName: 'Automotive',
				img_url:
					'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D'
			}
		];

		const subcategories = [];
		for (const subcat of subcategoriesData) {
			const category = categories.find(c => c.name === subcat.categoryName);
			if (!category) {
				console.warn(`Category not found for subcategory ${subcat.name}`);
				continue;
			}

			const createdSubcat = await this.subcategory.upsert({
				where: {
					name_category_id: {
						name: subcat.name,
						category_id: category.category_id
					}
				},
				update: {},
				create: {
					name: subcat.name,
					category_id: category.category_id,
					img_url: subcat.img_url
				}
			});

			subcategories.push(createdSubcat);
		}
		const productsData = [
			{
				name: 'Slim Fit Shirt',
				description: 'Comfortable cotton shirt',
				price: 29.99,
				img_url:
					'https://media.istockphoto.com/id/2226431375/photo/dark-blue-folded-men-shirt-with-a-red-sale-tag-fashion-and-shopping-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZTjQ05Mj2gkLZcRPWn7XwRzse9yqiwKUcfoaMnC5h_M=',
				categoryName: 'Fashion',
				subcategoryName: 'Men'
			},
			{
				name: 'Wireless Headphones',
				description: 'Noise cancelling headphones',
				price: 199.99,
				img_url:
					'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww',
				categoryName: 'Electronics',
				subcategoryName: 'Mobile Phones'
			},
			{
				name: 'Leather Wallet',
				description: 'Premium genuine leather wallet',
				price: 49.99,
				img_url:
					'https://plus.unsplash.com/premium_photo-1681589453747-53fd893fa420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyMFdhbGxldHxlbnwwfHwwfHx8MA%3D%3D',
				categoryName: 'Fashion',
				subcategoryName: 'Men'
			},
			{
				name: 'Gaming Laptop',
				description: 'High performance laptop for gaming',
				price: 1299.99,
				img_url:
					'https://images.unsplash.com/photo-1684127987312-43455fd95925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww',
				categoryName: 'Electronics',
				subcategoryName: 'Laptops'
			},
			{
				name: 'Garden Chair',
				description: 'Comfortable outdoor chair',
				price: 89.99,
				img_url:
					'https://plus.unsplash.com/premium_photo-1689609949905-0d27dac6c38e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FyZGVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D',
				categoryName: 'Home & Garden',
				subcategoryName: 'Furniture'
			},
			{
				name: 'Running Shoes',
				description: 'Lightweight and durable running shoes',
				price: 74.99,
				img_url:
					'https://images.unsplash.com/photo-1597892657493-6847b9640bac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww',
				categoryName: 'Sports',
				subcategoryName: 'Outdoor'
			},
			{
				name: 'Action Figure',
				description: 'Collectible superhero action figure',
				price: 24.99,
				img_url:
					'https://images.unsplash.com/photo-1630347254264-cad43144b2d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWN0aW9ucyUyMEZpZ3VyZXN8ZW58MHx8MHx8fDA%3D',
				categoryName: 'Toys & Games',
				subcategoryName: 'Action Figures'
			},
			{
				name: 'Face Moisturizer',
				description: 'Hydrating skin moisturizer cream',
				price: 19.99,
				img_url:
					'https://plus.unsplash.com/premium_photo-1715889658457-b4a41af9b1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFjZSUyME1vaXN0dXJpemVyfGVufDB8fDB8fHww',
				categoryName: 'Beauty',
				subcategoryName: 'Skincare'
			},
			{
				name: 'Car Phone Mount',
				description: 'Secure phone mount for car dashboards',
				price: 15.99,
				img_url:
					'https://plus.unsplash.com/premium_photo-1661601817621-cbfa76ad9d39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyJTIwUGhvbmUlMjBNb3VudHxlbnwwfHwwfHx8MA%3D%3D',
				categoryName: 'Automotive',
				subcategoryName: 'Car Accessories'
			},
			{
				name: 'Bluetooth Speaker',
				description: 'Portable wireless Bluetooth speaker',
				price: 59.99,
				img_url:
					'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
				categoryName: 'Electronics',
				subcategoryName: 'Mobile Phones'
			},
			{
				name: 'Car Wax',
				description: 'Protective wax for car paint',
				price: 9.99,
				img_url:
					'https://plus.unsplash.com/premium_photo-1663013309657-8b3a2a00849e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyJTIwV2F4fGVufDB8fDB8fHww',
				categoryName: 'Automotive'
				// no subcategory
			}
		];

		for (const product of productsData) {
			let categoryId: number | null = null;
			let subcategoryId: number | null = null;

			// 1. Try to find the category by name
			const category = categories.find(c => c.name === product.categoryName);

			if (category) {
				categoryId = category.category_id;

				// 2. Try to find subcategory only if subcategoryName is provided
				if (product.subcategoryName) {
					const subcategory = subcategories.find(
						s => s.name === product.subcategoryName && s.category_id === categoryId
					);

					if (subcategory) {
						subcategoryId = subcategory.subcategory_id;
					}
				}
			}

			// 3. If no category found, fallback to "Fashion"
			if (!categoryId) {
				const fallback = categories.find(c => c.name === 'Fashion');
				categoryId = fallback?.category_id ?? null;
			}

			// Determine which unique constraint to use for upsert
			const where =
				subcategoryId !== null && subcategoryId !== undefined
					? { name_subcategory_id: { name: product.name, subcategory_id: subcategoryId } }
					: { name_category_id: { name: product.name, category_id: categoryId } };

			await this.product.upsert({
				where,
				update: {}, // your update data here if any
				create: {
					name: product.name,
					description: product.description,
					price: product.price,
					img_url: product.img_url,
					category_id: categoryId,
					subcategory_id: subcategoryId
				}
			});
		}

		console.log('✅ Seed complete');
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
