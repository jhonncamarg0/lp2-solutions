const { conn } = require('../db');

async function create(data) {
  const sql = `
    INSERT INTO
      flags (id, name, image)
    VALUES
      (?, ?, ?)
  `;

  const db = await conn();

  const { id, name, image } = data;

  const { lastID } = await db.run(sql, [ id, name, image ]);

  return lastID;
}

async function readAll() {

  const sql =`
    SELECT
      flags.id, flags.image, flags.name
  `;

  const db = await conn();

  const flags = await db.all(sql);

  return flags;
}

async function readById(id) {

  const sql =`
    SELECT
      flags.id, flags.image, flags.name
  `;

  const db = await conn();

  const foods = await db.all(sql [ id ]);

  return foods;

}

module.exports = { create, readAll, readById };
