import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
let db:Database.Database|undefined;
export function database(){
 if(db)return db;
 const location=path.resolve(process.env.DATABASE_PATH||'./data/aurel-submissions.db');
 fs.mkdirSync(path.dirname(location),{recursive:true});
 db=new Database(location);
 db.pragma('journal_mode = WAL');
 db.exec(`CREATE TABLE IF NOT EXISTS requests (id INTEGER PRIMARY KEY AUTOINCREMENT, kind TEXT NOT NULL, business TEXT NOT NULL, contact TEXT NOT NULL, email TEXT NOT NULL, city TEXT, country TEXT, website TEXT, details TEXT, slug TEXT, status TEXT NOT NULL DEFAULT 'pending', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)`);
 return db;
}
