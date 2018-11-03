const TABLE_NAME = 'projects'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).insert([
    { id: 1, projectname:'801 3rd ave'},
    { id: 2, projectname:'Orthanc'},
    { id: 3, projectname:'Nakatomi Plaza'},
    { id: 4, projectname:'Space Ball 1'},
    { id: 5, projectname:'Manhattan Bridge'},
    { id: 6, projectname:'Lake Roosevelt Dam (demolition)'},
    { id: 7, projectname:'Space Elevator'},
    { id: 8, projectname:'new deck'},
    { id: 9, projectname:'First Avenue Sewage Rebuild'},
    { id: 10, projectname:'Light Rail on Floating Bridges'}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
};
