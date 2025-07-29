import { Request, Response } from 'express'
import { ErrorFactory } from '../utils/errorFactoryClass'
export const handleError = async (req: Request, res: Response) => {
  // initialize error factory here
  // results in explicit typing
  const response: ErrorFactory =
    ErrorFactory.createError('ZERO_DIVISION').buildResponse()
  // get params

  res.json({ message: response })
}
