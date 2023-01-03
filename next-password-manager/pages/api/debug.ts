import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const environment = process.env.NODE_ENV;
    if (environment !== "development") {
        return res.status(500).send("Something went wrong");
    }

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('passwordManager.db');

    const query = "SELECT * FROM Users"

    let users: any = [];
    db.all(query, [], (err: any, rows: any) => {
        if (err) {
            throw err;
        }
        console.log(users);
    });

    db.close();
    res.status(200).send('');
}
