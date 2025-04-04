import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const port = Number(process.env.DB_PORT) || 5432

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})
