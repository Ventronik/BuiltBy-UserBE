const TABLE_NAME = 'businesses_projects'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, projects_id:1, businesses_id:1, role: 'Electrician' },
    {id: 2, projects_id:2, businesses_id:2, role: 'General Contractor' },
    {id: 3, projects_id:2, businesses_id:3, role: 'Property Owner' },
    {id: 4, projects_id:3, businesses_id:4, role: 'Demolitions' },
    {id: 5, projects_id:3, businesses_id:5, role: 'Carpentry' },
    {id: 6, projects_id:4, businesses_id:1, role: 'Destroyer of worlds' },
    {id: 7, projects_id:5, businesses_id:2, role: 'Crane' },
    {id: 8, projects_id:6, businesses_id:3, role: 'Architect' },
    {id: 9, projects_id:7, businesses_id:4, role: 'Engineer' },
    {id: 10, projects_id:8, businesses_id:5, role: 'Canadian' },
    {id: 11, projects_id:9, businesses_id:1, role: 'Electrician' },
    {id: 12, projects_id:10, businesses_id:2, role: 'Plumber'  }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
