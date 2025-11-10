class User {
    constructor(
        private firstName: string, 
        private lastName: string
    ) {}
    get fullName(){
        return this.firstName + this.lastName
    }
}

const max = new User('Max', 'Musterman')
new User('Fred', 'Machado')

// Its like a computed prop
console.log(max.fullName)

///////////////////////////////////////////////////
// static and set/getters 

class User2 {
    protected _firstName: string = ''
    private _lastName: string = ''

    set firstName(name: string){
        if(name.trim() === '') throw new Error('invalid name')
        this._firstName = name
    }

    set lastName(name: string){
        if(name.trim() === '') throw new Error('invalid name')
        this._lastName = name
    }

    get fullName(){
        return this._firstName + this._lastName
    }

    static eid = "USER"

    static someMethod(){
        console.log("hello")
    }
}

const max2 = new User2()
max2.firstName = 'max'
max2.lastName = 'musterman'
console.log(max2.fullName)

User2.someMethod()

/////////////////////////////////////////////////
// extends

class Employee extends User2 {

    constructor(public jobTitle: string){
        super() // here we would need to pass parameters
    }

    work(){
        console.log(this._firstName) // Protected give the child access to props of the parent
        return //...
    }
}

//////////////////////////////////////////////////
// abstract ckasses

abstract class UIElement {
    constructor(
        public identifier: string
    ){}
    clone(targetLocation: string){
        // logic..
    }
}

// This UIElement cant not be directly instanciated

class SideDrawerElement extends UIElement {
    constructor(
        public identifier: string,
        public positoin: 'left' | 'right'
    ){
        super(identifier)
    }
    //.... 
}


