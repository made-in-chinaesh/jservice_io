import { ApiProperty } from '@nestjs/swagger'
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

export abstract class Base {
	@ApiProperty({ example: 1, description: "Entity's id" })
	@PrimaryGeneratedColumn()
	id: number

	@ApiProperty({
		example: '2023-12-24T16:39:08.513Z',
		description: "Entity's created at date",
	})
	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@ApiProperty({
		example: '2023-12-24T17:39:08.513Z',
		description: "Entity's updated at date",
	})
	@CreateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}
