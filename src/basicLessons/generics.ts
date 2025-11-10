// When defining an array
let names: Array<string> = ['Max', 'Anna'] // This uses the Generics features
let names2: string[] = ['Max', 'Anna']

type DataStoreG<T> = { // T indicates a type that will be specified later
    [key: string]: T
}

let store: DataStoreG<string | boolean> = {}
store.name = 'max'
store.isInstructor = true 

let store2: DataStoreG<string> = {} // this one will only support strings

/////////////////////////////////////
// Generic functions

function merge<T>(a: T, b: T){
    return [a,b]
}

const ids = merge<number>(1,2)
const ids2 = merge(1,2) // TS can also infere this info

////////////////////////////////////
// Multy type

function multiMerge<T, U>(a: T, b: U){
    return [a,b]
}

const ids3 = multiMerge(1, 'Hello')

/////////////////////////////////////
// Constraints

function mergeObj<T extends object, U extends object>(a: T, b: U){
    return {...a, ...b}
}

const merged = mergeObj({},{test: 1})

/////////////////////////////////////////
// Generic classes / interfaces

class User<T> {
    constructor(
        public id: T
    ){}
}

const user = new User('111')

interface test<T> {
    name: T
}

class User2 implements test<string>{
    constructor(
        public name: string
    ){}
}

