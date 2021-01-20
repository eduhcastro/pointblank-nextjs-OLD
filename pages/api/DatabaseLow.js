import low from 'lowdb';
import data from './pages/api/Accounts.json'
import data2 from 'Accounts.json'
import FileSync from 'lowdb/adapters/FileSync';
const adapter = new FileSync('./pages/api/Accounts.json')
const db = low(adapter)
db.defaults({ AccountsPLayers: [] }).write();

export default db;