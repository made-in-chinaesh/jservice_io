import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'
import { CategoryEntity } from './schemas/category.entity'
import { CategoryDeleteResult } from './category.types'

@ApiTags('category')
@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	@ApiOperation({ summary: 'Create category' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'For create category',
		type: CategoryEntity,
	})
	public createCategory(@Body() dto: CategoryDto) {
		return this.categoryService.createCategory(dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete category' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'For delete category',
		type: CategoryDeleteResult,
	})
	public deleteCategory(@Param('id') id: number) {
		return this.categoryService.deleteCategory(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update category' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'For update category',
		type: CategoryEntity,
	})
	public updateCategory(@Param('id') id: number, @Body() dto: CategoryDto) {
		return this.categoryService.updateCategory(id, dto)
	}

	@Get()
	@ApiOperation({ summary: 'Get categories' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'For get categories',
		type: [CategoryEntity],
	})
	public getCategories() {
		return this.categoryService.getCategories()
	}
}
