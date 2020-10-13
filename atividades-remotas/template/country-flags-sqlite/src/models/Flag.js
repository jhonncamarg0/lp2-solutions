const { conn } = require('../db');

async function create(data) {
  const sql = `
    INSERT INTO
      flags (image, name)
    VALUES
      (?, ?)
  `;

  const db = await conn();

  const { image, name } = data;

  const { lastID } = await db.run(sql, [ image, name ]);

  return lastID;
}

async function readAll() {

  const sql =`
    SELECT * FROM
      flags
  `;

  const db = await conn();

  const flags = await db.all(sql);

  return flags;
}

async function readById(id) {

  const sql =`
    SELECT * FROM
      flags WHERE id = ?
  `;

  const db = await conn();

  const flags = await db.get(sql, id);

  return flags;
}

module.exports = { create, readAll, readById };
