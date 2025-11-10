type User = {
    name: string;
    age: number;
}

// Returns a union type of the types of the keys of another type
type UserKeys = keyof User

let validKey: UserKeys

validKey = 'name'
validKey = 'age'

function getProp<T extends object, U extends keyof T>(obj: T, key: U){
    const val = obj[key]
    if(val === undefined || val === null){
        throw new Error('Accessing undefined or null value')
    }
    return val
}

const user = {name: 'Max', age: 35}
const val = getProp(user, 'age')