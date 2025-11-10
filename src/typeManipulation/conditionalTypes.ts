// This is very usefull for building utility types 
// If we are dealing with a lot of arrays for example, and want to extract the type of array elements
type StringArray = string[]
type ElementType = StringArray[number]

// we could try to do
type ElementType2<T extends any[]> = T[number]
type Example1 = ElementType2<StringArray> // but this works only for arrays

// a more generic version could be built with conditional types
type GetElementType<T> = T extends any[] ? T[number] : never
type Example2 = GetElementType<StringArray>
const text = 1 
type Example3 = GetElementType<typeof text>

//////////////////////////

type FullNamePerson = {
    firstName: string
    lastName: string
}
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
    if('firstName' in person 
        && 'lastName' in person 
        && person.firstName 
        && person.lastName
    ){
        return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>
    }
    throw new Error('Nor first name or last name found')
}

const nam1 = getFullName({});
const name2 = getFullName({ firstName: 'pepe '})
const name3 = getFullName({ firstName: 'pepe', lastName: "mujika"})