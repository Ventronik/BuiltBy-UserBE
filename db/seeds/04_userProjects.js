const TABLE_NAME = 'users_projects'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, projects_id:1, users_id:1, role: 'Electrician' },
    {id: 2, projects_id:2, users_id:2, role: 'General Contractor' },
    {id: 3, projects_id:2, users_id:3, role: 'Plumber' },
    {id: 4, projects_id:3, users_id:4, role: 'Demolitions' },
    {id: 5, projects_id:3, users_id:12, role: 'Carpentry' },
    {id: 6, projects_id:4, users_id:1, role: 'Underwater Basket Weaver' },
    {id: 7, projects_id:5, users_id:2, role: 'Crane' },
    {id: 8, projects_id:6, users_id:3, role: 'Architect' },
    {id: 9, projects_id:7, users_id:4, role: 'Engineer' },
    {id: 10, projects_id:8, users_id:12, role: 'Canadian' },
    {id: 11, projects_id:9, users_id:1, role: 'Electrician' },
    {id: 12, projects_id:10, users_id:2, role: 'Plumber'  }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
