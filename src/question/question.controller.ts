import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	Post,
	Put,
	Query,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { QuestionService } from './question.service'
import { QuestionDto } from './dto/question.dto'
import { QuestionEntity } from './schema/question.entity'
import {
	QuestionQuery,
	QuestionDeleteResult,
	QuestionPaginationResult,
} from './question.types'

@ApiTags('question')
@Controller('question')
export class QuestionController {
	constructor(private readonly questionService: QuestionService) {}

	@Post()
	@ApiOperation({ summary: 'Create question' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'For create question',
		type: QuestionEntity,
	})
	public createQuestion(@Body() dto: QuestionDto) {
		return this.questionService.createQuestion(dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete question' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'For delete question',
		type: QuestionDeleteResult,
	})
	public deleteQuestion(@Param('id') id: number) {
		return this.questionService.deleteQuestion(id)
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update question' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'For update question',
		type: QuestionEntity,
	})
	public updateRepository(
		@Param('id') id: number,
		@Body() dto: Partial<QuestionDto>
	) {
		return this.questionService.updateQuestion(id, dto)
	}

	@Get()
	@ApiOperation({ summary: 'Get questions' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'For get questions',
		type: QuestionPaginationResult,
	})
	public getQuestion(@Query() query: Partial<QuestionQuery>) {
		return this.questionService.getQuestions(query)
	}
}
