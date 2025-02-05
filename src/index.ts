import express from 'express'
import  cors  from 'cors'
import { AppDataSource } from './data-source'
import { routes } from './shared/routes'
import './shared/container/container'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(routes)

  return app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000')
  })
})
