type User ={
    id:number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const user: User ={
    id: 1,
    username: 'Liliam yamada',
    password: '123456',
    createdAt: new Date(),
    updatedAt: new Date(),
}

type PartialUser = Partial<User>

const user2: PartialUser = {
    username: "joão",
}

type NewUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

const user3: NewUser = {
    username: "Mário, Silva",
    password: "hksdk"
}

type SearchUser = Pick<User, 'username'>

const user4: SearchUser = {
    username: "Aurélio"
}