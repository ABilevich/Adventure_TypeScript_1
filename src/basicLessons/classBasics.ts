// class User {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
// }

// This is only valid on ts
class User {
    constructor(
        public name: string, 
        public age: number
    ) {}
}

new User('Max', 22)
new User('Fred', 22)

////////////////////////////////////////////////////////////////

class PrivateUser {
    constructor(
        private name: string, 
        private age: number
    ) {}
    getName(){
        return this.name
    }
}

const max = new PrivateUser("Max2", 22)
console.log(max.getName())

////////////////////////////////////////////////////////////////


class PrivateUserReadOnly {
    constructor(
        readonly name: string, 
        private age: number
    ) {}
    getName(){
        return this.name
    }
}

const max2 = new PrivateUserReadOnly("Max2", 22)
console.log(max.getName())
// max2.name = "some other name" CANT DO THIS

