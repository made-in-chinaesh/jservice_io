import { ApiProperty } from '@nestjs/swagger'

export class CategoryDeleteResult {
	@ApiProperty({ example: 1, description: "Category's id" })
	id: number

	@ApiProperty({
		example: 'Success delete - 1',
		description: "Category's delete message",
	})
	message: string
}
