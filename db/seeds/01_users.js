const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, username:'Roger', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    { id: 2, username:'Wes', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    { id: 3, username:'Scott', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    { id: 4, username:'Abe', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    { id: 12, username:'Vika', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
