import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
const adapter = new FileSync('./path/to/Accounts.json')
const db = low(adapter)
db.defaults({ AccountsPLayers: [] }).write();

export default db;