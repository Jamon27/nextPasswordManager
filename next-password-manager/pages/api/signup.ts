import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.body);
    //if (req.method === 'POST') 
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('passwordManager.db');

    const placeholders = {
        $UserName: req.body.name,
        $UserLogin: req.body.login,
        $UserToken: req.body.password
    };

    const query = "INSERT INTO Users (UserName, UserLogin, UserToken) VALUES($UserName, $UserLogin, $UserToken)";
    const statement = db.prepare(query);

    statement.run(placeholders, function (err:any) {
        if (err) {
            console.log(err);
        }
    });

    statement.finalize();
    db.close();
    res.status(200).send("Account has been created!");
}
