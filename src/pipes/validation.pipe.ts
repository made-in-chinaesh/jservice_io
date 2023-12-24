import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

import { ValidationExceptions } from './exceptions/validation.exceptions'

@Injectable()
export class ValidationPipe implements PipeTransform {
	async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
		const object = plainToInstance(metatype, value)
		const errors = await validate(object)

		if (errors.length > 0) {
			const message = errors.map(item => ({
				property: item.property,
				message: Object.values(item.constraints),
			}))

			const obj = {
				message,
				statusCode: 400,
			}

			throw new ValidationExceptions(obj)
		}
		return value
	}
}
