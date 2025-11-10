type FileSource = { type: 'file', path: string };
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
    type: "db",
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

// "type predicate" as a resoult type
function isFile(source: Source){
    return source.type === 'file'
}

// Property inclusoin 
function loadData(source: Source) {
    // We can check for the existance of a prop
    if('path' in source){
        // do something with source.path
        return
    }
    // now ts understands the type
    source.connectionUrl;
}

// Discriminated union pattern
function loadData2(source: Source) {
    // We can check for the existance of a prop
    if(source.type === 'file'){
        // do something with source.path
        return source.path
    }
    // now ts understands the type
    source.connectionUrl;
}

// with confirmatoin function
function loadData3(source: Source) {
    // We can check for the existance of a prop
    if(isFile(source)){
        // do something with source.path
        return source.path
    }
    // now ts understands the type
    source.connectionUrl;
}

/////////////////////////////////////////////////////////////
// when dealing with classes, we can use the instandeof operator (from js)

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
 // .join() OR .scan() ...
 if(entity instanceof User){
    entity.join()
    return
 }
 entity.scan()
}