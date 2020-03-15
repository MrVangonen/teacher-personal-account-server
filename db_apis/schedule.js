const database = require('../services/database.js');
 
const baseQuery = 
 `select lesson_id "id",
  title "title",
  room "room"
 from lesson`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.lesson_id = context.id;
 
    query += `\nwhere lesson_id = :lesson_id`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;