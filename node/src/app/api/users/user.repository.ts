import { Repository } from "typeorm";
import { User } from "./user.model";
import { UserDTO } from "./user.dto";
import { AppDataSource } from "../../../shared/typeorm/data-source";
import { promises } from "dns";

export default class UserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(User);
    }

    async create(user: UserDTO) : Promise<User> {
        console.log(user)
        return await this.ormRepository.save(
            new User(
                user.firstName,
                user.lastName,
                user.email,
                user.password
            )
        )
    }

    findById(id: string) {
        return this.ormRepository.findOneBy({ id })
    }

    find(filter: any) {
        return this.ormRepository.findBy(filter)
    }

    findOne(filter: any): Promise<User | null> {
        return this.ormRepository.findOneBy(filter)
    }
}
