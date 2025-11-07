
function getLength(val:  any[]):number
function getLength(val: string):string // this tells ts that if called with a string, the result will be a string
function getLength(val: string | any[]) {
    if(typeof val === 'string'){
        const numberOfWords = val.split(' ').length
        return `${numberOfWords} words`
    }else{
        return val.length; 
    }
}

const numOfWords = getLength('does this work?') // TS doesnt know that numOfWords iw 100% a string
// we could use type casting (as string) to be able to run numOfWorkds.length
numOfWords.length
const numItems = getLength(['sports', 'cookies'])

/////////////////////////////////


