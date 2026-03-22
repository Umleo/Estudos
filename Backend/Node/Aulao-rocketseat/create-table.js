import {sql} from './sql.js'


sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTERVAL
    );
`.then(()=>{
    console.log('Tabela criada')
})