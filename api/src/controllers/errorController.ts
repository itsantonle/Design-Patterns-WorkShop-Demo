import { Request, Response } from 'express'
import { ErrorFactory } from '../utils/errorFactoryClass'
import { ExpressionAdapter } from '../utils/errorAdapterClass'
export const handleError = async (req: Request, res: Response) => {
  // initialize error factory here
  // results in explicit typing
  ErrorFactory.createError('ZERO_DIVISION').buildResponse()
  const strOp = req.query.strOp as string
  const result = ExpressionAdapter.evaluateFromQuery(strOp)

  res.json({ message: result })
}
