import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsInt, IsString } from 'class-validator'

import { CategoryEntity } from '../../category/schemas/category.entity'

const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const
type TypeQuestionAnswer = (typeof prices)[number]

export class QuestionDto {
	@ApiProperty({
		example: 'Current USA president?',
		description: "Question's title",
	})
	@IsString({ message: 'Must be string' })
	readonly title: string

	@ApiProperty({
		example: 'Lorem ipsum dolor fa so',
		description: "Question's description",
	})
	@IsString({ message: 'Must be string' })
	readonly description: string

	@ApiProperty({
		example: 'Joe Biden',
		description: "Question's answer",
	})
	@IsString({ message: 'Must be string' })
	readonly answer: string

	@ApiProperty({
		example: 100,
		description: "Question's price",
	})
	@IsInt({ message: 'Must be number' })
	@IsIn(prices)
	readonly price: TypeQuestionAnswer

	@ApiProperty({
		example: 1,
		description: "Question's category",
	})
	readonly category: CategoryEntity
}
