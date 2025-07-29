import express from 'express'
import { handleError } from '../controllers/errorController'
const router = express.Router()

router.route('/').get(handleError)

export default router
