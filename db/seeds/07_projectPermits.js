const TABLE_NAME = 'project_permits'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    {id: 1, projects_id:1, permits_id:1 },
    {id: 2, projects_id:2, permits_id:2 },
    {id: 3, projects_id:2, permits_id:3 },
    {id: 4, projects_id:3, permits_id:4 },
    {id: 5, projects_id:3, permits_id:12 },
    {id: 6, projects_id:4, permits_id:1 },
    {id: 7, projects_id:5, permits_id:2 },
    {id: 8, projects_id:1, permits_id:3 },
    {id: 9, projects_id:2, permits_id:4 },
    {id: 10, projects_id:3, permits_id:12 },
    {id: 11, projects_id:4, permits_id:1},
    {id: 12, projects_id:5, permits_id:2 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
