import { UserDTO } from "./user.dto";
import UserRepository from "./user.repository";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const bcrypt = require('bcrypt');

export default class UserService {
    private repository: UserRepository

    constructor() {
        this.repository = new UserRepository()
    }

    async create(user: UserDTO) {
        user.password = await bcrypt.hash(user.password, 10)

        const userCreated = await this.repository.create(user)

        const token = jwt.sign({ userCreated }, process.env.SECRET_KEY || 'jvns', { expiresIn: '1d' });

        return { userCreated, token }
    }

    async login(email: string, password: string) {
        const user = await this.repository.findOne({
            email: email
        }).catch((err) => {
            return Error(err)
        })

        if (user) {
            const token = jwt.sign({ user }, process.env.SECRET_KEY || 'jvns', { expiresIn: '1d' });
            return { user, token }
        } else {
            return Error('Usuário não encontrado')
        }
    }

}
