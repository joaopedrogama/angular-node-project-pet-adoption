import "reflect-metadata"
import { DataSource } from "typeorm"
import 'dotenv/config'
import { User } from "../../app/api/users/user.model"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: ["node/src/modules/**/migrations/*.ts"],
    subscribers: [],
})
