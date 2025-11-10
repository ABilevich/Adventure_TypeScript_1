//////////////////////////////////////////////////////
// Interfaces

// can be used as types, or with clases with the "implements" keyword

interface Authenticatable {
    email: string
    password: string
    login(): void
    logout(): void
}

// For objects, this would be the same: 
// type Authenticatable = {
//     email: string
//     password: string
//     login(): void
//     logout(): void
// }

let user: Authenticatable;

user = {
    email: "test@test.test",
    password: "123321",
    login() {
        // something
    },
    logout: () => {
        // something
    }
}


///////////////////////////////////////////
// declaratoin merging
// An interface that already exista can be edited by redefining it with the new stuff
// interface Authenticatable {
//     role: string
// }
// this can also be done with extends
interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superAdmin'
}

/////////////////////////////////////////////
// they can also be used to define a functions type
interface SumFn {
    (a: number, b: number): number
}

const sumFn: SumFn = (a,b) => a+b



////////////////////////////////////////////////
// They can be used in conjunction with classes

class AuthenticatableUser implements Authenticatable {
    constructor(
        public userName: string, // You can have extra stuff
        public email: string, 
        public password: string
    ){}
    login(): void {
        
    }
    logout(): void {
        
    }
}

function authenticate(user: AuthenticatableUser){
    user.login()
}