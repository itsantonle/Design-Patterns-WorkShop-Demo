import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

// route imports
import errorRoute from './routes/errorRoute'
const app = express()
const PORT = process.env.PORT || 3007

app.use(cors())
app.use(express.json())

// routes
app.use('/error', errorRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
