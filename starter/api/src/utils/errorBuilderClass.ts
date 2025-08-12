//create an interace to build on top of
// use the interface type to build out your builder patterns

export interface ErrorResponse {}

// this means return type that is unfinished ErrorResponse
export class ErrorResponseBuilder {
  private response: Partial<ErrorResponse> = {}
}
