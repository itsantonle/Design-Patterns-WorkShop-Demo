import express from 'express'
import { handleError } from '../controllers/errorController'
const router = express.Router()

router.route('/error').get(handleError)

export default router
