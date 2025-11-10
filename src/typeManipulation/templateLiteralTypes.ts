const mainUserName = 'Max'

const greeting = `Hi there ${mainUserName}` // This is a JS template literal (standard JS)

// TS offers a type that works on a similar way

type ReadPermissions = 'no-read' | 'read'
type WritePermissions = 'no-write' | 'write'

// type FilePermissions = 
//     | 'no-read-write' 
//     | 'no-read-no-write'
//     | 'read-write'
//     | 'read-no-write'
// we want to define thie not by hand
type FilePermissions = `${ReadPermissions}-${WritePermissions}` // this is now a merged literal type

// another usefulll case

type DataFile = {
    data: string,
    permissions: FilePermissions
}

type DataFileEventNames = `${keyof DataFile}Change` // this string literal type now is created automaticaly

type DataFileEvents = {
    [Key in DataFileEventNames]: () => void // this could be an event handler
}

