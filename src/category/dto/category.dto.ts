import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CategoryDto {
	@ApiProperty({ example: 'Geography', description: "Category's name" })
	@IsString({ message: 'Must be string' })
	readonly name: string
}
