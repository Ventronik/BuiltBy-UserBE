const TABLE_NAME = 'businesses'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, businessname:'Man-O-War Technologies'},
    { id: 2, businessname:'Evil Corp',},
    { id: 3, businessname:'Builders League United'},
    { id: 4, businessname:'Reliable Excavation Demolition'},
    { id: 5, businessname:'Venture Industries'}
    // { id: 6, businessname:'Caludia', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    // { id: 7, businessname:'Daniel', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    // { id: 8, businessname:'Dustin', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    // { id: 9, businessname:'Gavin', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    // { id: 10, businessname:'Mark', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    // { id: 11, businessname:'Sunil', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' },
    // { id: 12, businessname:'Vika', password:'$2a$10$d7zbX/SkYPDGQVOdsSgFX.Ixo1G42wXaLO15lW7JsQuuXNiJfUqx6' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
