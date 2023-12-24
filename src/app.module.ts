import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { getTypeOrmConfig } from './config/typeorm.config'
import { CategoryModule } from './category/category.module'
import { QuestionModule } from './question/question.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig,
		}),
		CategoryModule,
		QuestionModule,
	],
})
export class AppModule {}
