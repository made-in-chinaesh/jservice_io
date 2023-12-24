import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CategoryEntity } from './schemas/category.entity'
import { CategoryDto } from './dto/category.dto'
import { CategoryDeleteResult } from './category.types'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(CategoryEntity)
		private readonly categoryRepository: Repository<CategoryEntity>
	) {}

	public async createCategory(dto: CategoryDto): Promise<CategoryEntity> {
		return await this.categoryRepository.save(dto)
	}

	public async deleteCategory(id: number): Promise<CategoryDeleteResult> {
		try {
			const category = await this.getOneCategory(id)

			if (!category) {
				throw new HttpException('Category not found', HttpStatus.NOT_FOUND)
			}

			await this.categoryRepository.delete({ id })

			return {
				id,
				message: `Success delete category - ${id}`,
			}
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	public async updateCategory(
		id: number,
		dto: CategoryDto
	): Promise<CategoryEntity> {
		try {
			const category = await this.getOneCategory(id)

			if (!category) {
				throw new HttpException('Category not found', HttpStatus.NOT_FOUND)
			}

			return await this.categoryRepository.save({ ...category, ...dto })
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	public async getCategories(): Promise<CategoryEntity[]> {
		return await this.categoryRepository.find()
	}

	private async getOneCategory(id: number) {
		return await this.categoryRepository.findOne({ where: { id } })
	}
}
