type FileData = {
    path: string,
    content: string
}

type DatabaseData = {
    connectoinUrl: string;
    credentials: string
}

type Status = {
    isOpen: boolean,
    errorMessage?: string
}

// It allwos some type to be combined with other and reduced 

type AccessedFileData = FileData & Status
type AccessedDatabaseData = DatabaseData & Status

///////////////////////////////////////
// This could also have been defined with interfaces by extending

interface FileDataInterface {
    path: string,
    content: string
}

interface DatabaseDataInterface {
    connectoinUrl: string;
    credentials: string
}

interface StatusInterface {
    isOpen: boolean,
    errorMessage?: string
}

// It allwos some type to be combined with other and reduced 

interface AccessedFileDataInterface extends FileData, Status {}
interface AccessedDatabaseDataInterface extends DatabaseData, Status {}

/////////////////////////////////////////////////
