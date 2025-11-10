const appUser = {
    name: 'Max',
    age: 35,
    permissions: [{
        id: 1,
        title: 'test',
        despcription: 'desc'
    }]
}

// I could infere from a value
type InferredAppUser = typeof appUser

// Or define from scarth
type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        descriptoin: string;
    }[]
}

// If I wated to infer the type of permissions only
type Perms = AppUser['permissions']

// It can also be used with arrays to extract the type of an element on the array
type Perm = Perms[number] // Perm now has just the object, not the array

// another example
type Names = string[]
type name = Names[number]