const TABLE_NAME = 'businesses_users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    {id: 1, businesses_id:1, users_id:1 },
    {id: 2, businesses_id:2, users_id:2 },
    {id: 3, businesses_id:2, users_id:3 },
    {id: 4, businesses_id:3, users_id:4 },
    {id: 5, businesses_id:3, users_id:12 },
    {id: 6, businesses_id:4, users_id:1 },
    {id: 7, businesses_id:5, users_id:2 },
    {id: 8, businesses_id:1, users_id:3 },
    {id: 9, businesses_id:2, users_id:4 },
    {id: 10, businesses_id:3, users_id:12 },
    {id: 11, businesses_id:4, users_id:1},
    {id: 12, businesses_id:5, users_id:2 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
