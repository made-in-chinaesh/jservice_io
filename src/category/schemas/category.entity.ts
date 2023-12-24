import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, OneToMany } from 'typeorm'

import { Base } from '../../utils/base'
import { QuestionEntity } from '../../question/schema/question.entity'

@Entity('Category')
export class CategoryEntity extends Base {
	@ApiProperty({ example: 'Geography', description: "Category's name" })
	@Column({ unique: true })
	name: string

	@OneToMany(() => QuestionEntity, question => question.category)
	questions: QuestionEntity[]
}
