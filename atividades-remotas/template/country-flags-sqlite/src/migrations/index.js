const { conn } = require('../db');

async function up() {
  const db = await conn();

  await db.run(`
    CREATE TABLE IF NOT EXISTS flags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT
    )
  `);
}

async function down() {
  const sql = `DROP TABLE flags`;

  const db = await conn();

  await db.run(sql);
}

module.exports = { up, down };
