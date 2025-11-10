// it gives you a simple way of converting one object type to another
type Operations = {
    add: (a: number, b: number) => number
    subtract: (a: number, b: number) => number
}

// This could be created by hand
// type Results = {
//     add: number
//     subtract: number
// }
type Results<T> = {
    [Key in keyof T]: number // this means that the key is one of the keys of the type
}
// or define it based on another type


let mathOperations: Operations = {
    add(a: number, b: number){
        return a+b
    },
    subtract(a: number, b: number){
        return a-b
    }
}

let mathResutls: Results<Operations> = {
    add: mathOperations.add(1,2),
    subtract: mathOperations.subtract(2,3)
}

////////////////////////
type OptionalResults<T> = {
    [Key in keyof T]?: number 
}
// now when doing a new mathResults, we could omit implementing all methods
let mathResutls2: OptionalResults<Operations> = {
    add: mathOperations.add(1,2),
}


//////////////////////////////
type OptionalOperations = {
    add?: (a: number, b: number) => number
    subtract?: (a: number, b: number) => number
}

type ForcedResults<T> = {
    [Key in keyof T]-?: number // the -? mean that the keys are no longer optional
}
// we can use the -? to remove the infered option form the keyof type

type ReadOnlyResults<T> = {
    readonly [Key in keyof T]: number // we can use the readonly to make a prop readonly (not only on the mapped types)
}

///////////////////////////////////
// if the readOnly is on the file and we want to remove it
type ReadonlyOperations = {
    readonly add: (a: number, b: number) => number
    readonly subtract: (a: number, b: number) => number
}

type EditableResults<T> = {
    -readonly [Key in keyof T]: number // the - allwos us to remove the readonly restriction in this case
}
