import { PrimaryColumnCannotBeNullableError } from "typeorm"

const UserSerializer = {
    type: 'object',
    required: [
        'firstName',
        'lastName',
        'email',
        'password'
    ],
    properties: {
        firstName: {
            type: 'string',
            nullable: false
        },
        lastName: {
            type: 'string',
            nullable: false
        },
        email: {
            type: 'string',
            nullable: false
        },
        password: {
            type: 'string',
            nullable: false
        }
    }
}
export { UserSerializer }
