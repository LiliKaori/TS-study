const GENDER = {
    male: 'male',
    female: 'female',
    other: 'other'
}

enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

type Person = {
    name: string;
    age: number;
    gender: Gender;
}

const person: Person = {
    name: 'Liliam Kaori Yamada',
    age: 36,
    gender: Gender.FEMALE,
}

function displayPersonInfo(person: Person): void {
    console.log(`${person.name}`)
    console.log(`${person.age}`)
    console.log(`${person.gender}`)
}

displayPersonInfo(person)