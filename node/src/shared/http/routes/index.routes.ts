import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { userRoute } from "../../../app/api/users/user.route";

export function indexRoute(server: FastifyInstance) {
    server.register(userRoute, {prefix: '/users'})
}
