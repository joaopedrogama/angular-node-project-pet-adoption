import { FastifyRequest, FastifyReply } from "fastify";
import UserService from "./user.service";
import { UserDTO } from "./user.dto";

export class UserController {
    private service: UserService;

    constructor() {
        this.service = new UserService();
    }

    create = async (request: FastifyRequest<{ Body: UserDTO }>, reply: FastifyReply) => {
        try {
            const result = await this.service.create(
                new UserDTO(
                    request.body.firstName,
                    request.body.lastName,
                    request.body.email,
                    request.body.password
                )
            );
            reply.status(201).send(result);
        } catch (error) {
            reply.send(error);
        }
    };

    login = async (request: FastifyRequest<{ Body: UserDTO }>, reply: FastifyReply) => {
        try {
            return await this.service.login(request.body.email, request.body.password);
        } catch (error) {
            reply.send(error);
        }
    };
}
