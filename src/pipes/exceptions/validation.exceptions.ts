import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationExceptions extends HttpException {
  constructor(response) {
    super(response, HttpStatus.BAD_REQUEST);
    this.message = response;
  }
}
