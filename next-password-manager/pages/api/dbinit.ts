import type {
    //NextApiRequest,
    NextApiResponse
} from 'next'

export default async function handler(
    //req: NextApiRequest,
    res: NextApiResponse
) {
    //if (!req.body.token) return res.status(401).send("You don't have access!");

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('passwordManager.db');

    db.run(
        `CREATE TABLE if not exists Users (
            Id INTEGER PRIMARY KEY,
            UserName NVARCHAR(255),
            UserLogin NVARCHAR(255),
            UserToken NVARCHAR(255)
        );
        
        CREATE TABLE if not exists ApplicationTypes (
            Id INTEGER PRIMARY KEY,
            Type NVARCHAR(255) NOT NULL
        );
        
        CREATE TABLE if not exists Applications (
            Id INTEGER PRIMARY KEY,
            ApplicationName NVARCHAR(255) NOT NULL,
            TypeId INTEGER NOT NULL,
            Note NVARCHAR(1023),
            CONSTRAINT FK_ApplicationTypes
            FOREIGN KEY (TypeId) REFERENCES ApplicationTypes (Id) 
        );
        
        CREATE TABLE if not exists Secrets (
            Id INTEGER PRIMARY KEY,
            UserId INTEGER NOT NULL,
            Login NVARCHAR(255) NOT NULL,
            Secret NVARCHAR(255) NOT NULL,
            ApplicationId INTEGER NOT NULL,
            CONSTRAINT FK_Users
            FOREIGN KEY (UserId) REFERENCES Users (Id),
            CONSTRAINT FK_Applications
            FOREIGN KEY (ApplicationId) REFERENCES Applications (Id) 	   
        );`
    );
    db.close();
    res.status(200).send("Ok!");
}