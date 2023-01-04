import type { NextApiRequest, NextApiResponse } from 'next';
import createDbConnection from '../../db/db';
import util from 'util';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const environment = process.env.NODE_ENV;
    if (environment !== "development") {
        return res.status(500).send("Something went wrong");
    }
    const db = createDbConnection();

    const query = "SELECT * FROM Users"

    let getAllPromise = util.promisify(db.all.bind(db));
    getAllPromise(query)
        .finally(() => {
            db.close();
        })
        .then(result => {
            console.log(result);
            res.status(200).send(result);
        }, error => {
            console.log(error);
            res.status(500).send(error);
        });
}
