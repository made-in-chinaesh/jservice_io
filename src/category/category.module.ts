import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'
import { CategoryEntity } from './schemas/category.entity'

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],
	controllers: [CategoryController],
	providers: [CategoryService],
	exports: [CategoryService],
})
export class CategoryModule {}
