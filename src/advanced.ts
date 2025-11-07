type DataStore = {
    [prop: string]: string | boolean
}
// variables of this type can now have any number of key value paires in the object,
// as long as the popr is of type string or boolean, and the value as well

let store: DataStore = {}

// Using record works in the same way
let someObj: Record<string, number | boolean>

// ...

store.id = '123'
store.isOpen = true

///////////////////////////////////////////////
// as const

// this tells ts to be as narrow as possible when infering the type of roles
let roles = ['admin', 'guest', 'editor'] as const
// roles.push('max) will not work
const firsRole = roles[0]

/////////////////////////////////////////////////
// satisfies

const dataEntries: Record<string, number> = {
    entry1: 0.51,
    entry2: -1.23
}

dataEntries.entry3 // is permitted even though it doesnt exist (this wouldnt happen without the record type specified)

const dataEntriesS = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>

// dataEntriesS.entry3 this now fails

// when using satisfies ts will check if the types satisfy the requirement, but then will make a more narrow inferance of the type
