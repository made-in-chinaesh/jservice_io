import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { QuestionDto } from './dto/question.dto'
import { QuestionEntity } from './schema/question.entity'
import {
	QuestionDeleteResult,
	QuestionPaginationResult,
	QuestionQuery,
} from './question.types'

@Injectable()
export class QuestionService {
	constructor(
		@InjectRepository(QuestionEntity)
		private readonly questionRepository: Repository<QuestionEntity>
	) {}

	public async createQuestion(dto: QuestionDto): Promise<QuestionEntity> {
		return await this.questionRepository.save(dto)
	}

	public async deleteQuestion(id: number): Promise<QuestionDeleteResult> {
		try {
			const question = await this.getOneQuestion(id)

			if (!question) {
				throw new HttpException('Not found question', HttpStatus.NOT_FOUND)
			}

			await this.questionRepository.delete({ id })
			return {
				id,
				message: `Success delete question - ${id}`,
			}
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	public async updateQuestion(
		id: number,
		dto: Partial<QuestionDto>
	): Promise<QuestionEntity> {
		try {
			const question = await this.getOneQuestion(id)

			if (!question) {
				throw new HttpException('Not found question', HttpStatus.NOT_FOUND)
			}

			return await this.questionRepository.save({
				...question,
				...dto,
			})
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	public async getQuestions(
		query: Partial<QuestionQuery>
	): Promise<QuestionPaginationResult> {
		try {
			const limit = query.limit || 10
			const page = query.page || 1
			const offset = page * limit - limit

			const [result, total] = await this.questionRepository.findAndCount({
				where: { category: { id: query.category } },
				take: limit,
				skip: offset,
				relations: ['category'],
			})

			return {
				count: total,
				data: result,
			}
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	private async getOneQuestion(id: number): Promise<QuestionEntity> {
		return await this.questionRepository.findOne({ where: { id } })
	}
}
