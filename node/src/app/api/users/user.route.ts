import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import { UserController }  from "./user.controller";


export function userRoute(server: FastifyInstance) {
    const userControler = new UserController()

    server.post('/', userControler.create)
    server.post('/login', userControler.login)
}
