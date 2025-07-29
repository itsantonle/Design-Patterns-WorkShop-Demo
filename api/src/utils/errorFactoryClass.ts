import { ErrorResponse, ErrorResponseBuilder } from './errorBuilderClass'
interface CustomError {
  message: string
  code: string
  buildResponse(): ErrorResponse
}

class ZeroDivisionError implements CustomError {
  message = 'Division by zero is undefined.'
  code = 'ZERO_DIVISION'

  buildResponse(): ErrorResponse {
    return new ErrorResponseBuilder()
      .setMessage(this.message)
      .setCode(this.code)
      .setSuggestion('Please check your denominator to avoid dividing by zero.')
      .build()
  }
}

class TypeMismatchError implements CustomError {
  message = 'Operands are not numbers.'
  code = 'TYPE_MISMATCH'

  buildResponse(): ErrorResponse {
    return new ErrorResponseBuilder()
      .setMessage(this.message)
      .setCode(this.code)
      .setSuggestion('Use numeric types for mathematical operations.')
      .build()
  }
}

class GeneralError implements CustomError {
  message = 'An unknown error occurred.'
  code = 'GENERAL_ERROR'

  buildResponse(): ErrorResponse {
    return new ErrorResponseBuilder()
      .setMessage(this.message)
      .setCode(this.code)
      .build()
  }
}

export class ErrorFactory {
  static createError(condition: string): CustomError {
    switch (condition) {
      case 'ZERO_DIVISION':
        return new ZeroDivisionError()
      case 'TYPE_MISMATCH':
        return new TypeMismatchError()
      default:
        return new GeneralError()
    }
  }
}

//sample usage
// function safelyDivide(a: any, b: any) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return ErrorFactory.createError('TYPE_MISMATCH').toJSON()
//   }
//   if (b === 0) {
//     return ErrorFactory.createError('ZERO_DIVISION').toJSON()
//   }
//   return { result: a / b }
// }
