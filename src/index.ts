import express from 'express'
import { AppDataSource } from './data-source'
import { routes } from './shared/routes'
import './shared/container/container'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())
  app.use(routes)

  return app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000')
  })
})
