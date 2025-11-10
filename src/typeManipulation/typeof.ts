const userName = 'Max'

// This is vanilla javascript
console.log(typeof userName)

// In this case, a version of typeof from ts is used
type UserName = typeof userName

//////////////////////////////////

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
}

type Settings = typeof settings

function loadData(settings: Settings){
    // ...
}

// This is also allowed
function loadData2(s: typeof settings){
    // ...
}

//////////////////////////////
// It can also be usefull to get the thype of a function

function sum(a: number, b: number){
    return a + b
}

function subtract(a: number, b: number){
    return a - b
}

type SumFn = typeof sum
type SubtractFn = typeof subtract

function performMathAction(cb: SumFn | SubtractFn){
    // Some code...
}