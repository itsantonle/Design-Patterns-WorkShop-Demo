import { ErrorResponse } from './errorBuilderClass'
import { ErrorFactory } from './errorFactoryClass'

export class ExpressionAdapter {
  // transforsms keyword expressions to mathematical symbols using regex
  static transformKeywordExpression(query: string): string {
    let count = 0
    //**regex
    // /substring/ targets substring
    // g flag replaces all instnces of substring
    // i means case insensitive
    // second param is what you replace it with
    // the last one is a special case when an anonymous function is called and returns a bool to decide if its an open or close parenthesis
    //  */
    return query
      .replace(/add/gi, '+')
      .replace(/minus/gi, '-')
      .replace(/multiply/gi, '*')
      .replace(/divide/gi, '/')
      .replace(/parenthesis/gi, () => (count++ % 2 === 0 ? '(' : ')'))
  }

  // Evaluates a transformed expression string.
  // Returns a number if successful, or an error response otherwise.
  static evaluateFromQuery(query: string): number | ErrorResponse {
    try {
      const transformedQuery = this.transformKeywordExpression(query)

      const validExpressionPattern = /^[0-9+\-*/ ().]+$/
      const isValidExpression = validExpressionPattern.test(transformedQuery)

      if (!isValidExpression) {
        return ErrorFactory.createError('TYPE_MISMATCH').buildResponse()
      }

      // Using Function constructor with strict mode to safely evaluate
      const strictEvaluator = Function(
        '"use strict"; return (' + transformedQuery + ');'
      )
      const result = strictEvaluator()

      const isNumeric = typeof result === 'number' && !isNaN(result)
      if (!isNumeric) {
        return ErrorFactory.createError('TYPE_MISMATCH').buildResponse()
      }

      if (!isFinite(result)) {
        return ErrorFactory.createError('ZERO_DIVISION').buildResponse()
      }

      return result
    } catch (err) {
      return ErrorFactory.createError('GENERAL_ERROR').buildResponse()
    }
  }
}
