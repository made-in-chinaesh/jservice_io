import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, ManyToOne } from 'typeorm'

import { Base } from '../../utils/base'
import { CategoryEntity } from '../../category/schemas/category.entity'

@Entity('Question')
export class QuestionEntity extends Base {
	@ApiProperty({
		example: 'Current USA president?',
		description: "Question's title",
	})
	@Column()
	title: string

	@ApiProperty({
		example: 'Lorem ipsum dolor fa so',
		description: "Question's description",
	})
	@Column({ type: 'text' })
	description: string

	@ApiProperty({
		example: 'Joe Biden',
		description: "Question's answer",
	})
	@Column()
	answer: string

	@ApiProperty({
		example: 100,
		description: "Question's price",
	})
	@Column()
	price: number

	@ApiProperty({
		description: "Question's category",
		type: () => CategoryEntity,
	})
	@ManyToOne(() => CategoryEntity, category => category.questions)
	category: CategoryEntity
}
