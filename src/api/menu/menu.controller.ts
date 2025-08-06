import {
	Controller,
	Get,
	Post,
	Patch,
	Delete,
	Param,
	Body,
	UseInterceptors,
	UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { MenuService } from './menu.service';
import { CreateMenuDto, UpdateMenuDto } from './dto';
import { ControllerErrorHandler } from '@/shared/error-handlers';
import { IServiceData } from '@/shared/interfaces';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
	constructor(
		private readonly menuService: MenuService,
		private readonly controllerErrorHandler: ControllerErrorHandler
	) {}

	@Get()
	async findAll() {
		const response: IServiceData = await this.menuService.findAll();
		return this.controllerErrorHandler.handleResponse(response);
	}

	@Get('submenu/get')
	async findAllSubMenu() {
		const response: IServiceData = await this.menuService.findAllSubMenus();
		return this.controllerErrorHandler.handleResponse(response);
	}

	@Get('slide/get')
	async findAllSlide() {
		const response: IServiceData = await this.menuService.findAllSlides();
		return this.controllerErrorHandler.handleResponse(response);
	}

	@Get(':id')
	async findOne(@Param('id') id: number) {
		const response: IServiceData = await this.menuService.findOne(id);
		return this.controllerErrorHandler.handleResponse(response);
	}

	@Post()
	async create(@Body() dto: CreateMenuDto) {
		const response: IServiceData = await this.menuService.create(dto);
		return this.controllerErrorHandler.handleResponse(response);
	}

	@Patch(':id')
	async update(@Param('id') id: number, @Body() dto: UpdateMenuDto) {
		const response: IServiceData = await this.menuService.update(id, dto);
		return this.controllerErrorHandler.handleResponse(response);
	}

	@Delete(':id')
	async remove(@Param('id') id: number) {
		const response: IServiceData = await this.menuService.remove(id);
		return this.controllerErrorHandler.handleResponse(response);
	}
}
