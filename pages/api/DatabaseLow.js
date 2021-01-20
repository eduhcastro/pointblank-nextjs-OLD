import low from 'lowdb';
import  './pages/api/Accounts.json'
import  'Accounts.json'
import FileSync from 'lowdb/adapters/FileSync';
const adapter = new FileSync('./pages/api/Accounts.json')
const db = low(adapter)
db.defaults({ AccountsPLayers: [] }).write();

export default db;