import { ApiProperty } from '@nestjs/swagger'

import { QuestionEntity } from './schema/question.entity'

export class QuestionDeleteResult {
	@ApiProperty({ example: 1, description: "Question's id" })
	id: number

	@ApiProperty({
		example: 'Success delete - 1',
		description: "Question's deleted message",
	})
	message: string
}

export class QuestionQuery {
	@ApiProperty({ example: 5, description: "Question's limit" })
	limit: number

	@ApiProperty({ example: 1, description: "Question's page" })
	page: number

	@ApiProperty({ example: 1, description: "Question's category id" })
	category: number
}

export class QuestionPaginationResult {
	@ApiProperty({ example: 5, description: "Question's count" })
	count: number

	@ApiProperty({ isArray: true, type: () => QuestionEntity })
	data: QuestionEntity[]
}
