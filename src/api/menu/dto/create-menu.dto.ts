import { IsOptional, IsString, IsNumber, IsInt } from 'class-validator';

export class CreateMenuDto {
	@IsString()
	menu_name: string;

	@IsOptional()
	@IsString()
	meta_desc?: string;

	@IsOptional()
	@IsString()
	meta_key?: string;

	@IsOptional()
	@IsString()
	page_cn?: string;

	@IsOptional()
	@IsString()
	img1?: string;

	@IsOptional()
	@IsString()
	img2?: string;

	@IsOptional()
	@IsString()
	type?: string;

	@IsOptional()
	@IsString()
	activity?: string;
}
