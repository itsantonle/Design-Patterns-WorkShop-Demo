interface CustomError {
  message: string
  code: string
  toJSON(): { error: string; code: string; suggestion?: string }
}
//implement class here take note factory is static method
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
