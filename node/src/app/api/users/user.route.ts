import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import { UserController }  from "./user.controller";
import { UserSerializer } from "./user.serializer";


export function userRoute(server: FastifyInstance) {
    const userControler = new UserController()

    server.post('/', {schema: {body: UserSerializer}}, userControler.create)
    server.post('/login', userControler.login)
}
