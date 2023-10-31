function getFirstElement <T>(data: T[]): T | null{
    if(!data.length){
        return null
    }

    const [firstElement] = data;

    return firstElement
}

const stringArray: string[] = ["Lucas", "Maria", "João", "Gabriel"]
const numberArray: number[] = [45,12,36,48]

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))