export interface ErrorResponse {
  error: string
  code: string
  suggestion?: string
}

// this means return type that is unfinished ErrorResponse
export class ErrorResponseBuilder {
  private response: Partial<ErrorResponse> = {}

  setMessage(message: string): this {
    this.response.error = message
    return this
  }

  setCode(code: string): this {
    this.response.code = code
    return this
  }

  setSuggestion(suggestion: string): this {
    this.response.suggestion = suggestion
    return this
  }

  build(): ErrorResponse {
    return this.response as ErrorResponse
  }
}
