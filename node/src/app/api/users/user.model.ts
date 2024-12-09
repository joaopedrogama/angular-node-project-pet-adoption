import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }
}
