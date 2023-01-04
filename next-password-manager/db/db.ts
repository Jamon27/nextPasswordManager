import packageInfo from '../package.json';
import * as sqlite from 'sqlite3';

const dbPath = packageInfo.dbPath;
const sqlite3 = require('sqlite3').verbose();

export default function createDbConnection() {
  const db: sqlite.Database = new sqlite3.Database(dbPath, (error:Error) => {
    if (error) {
      return console.error(error.message);
    }
  });
  
  return db;
}