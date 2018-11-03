const TABLE_NAME = 'project_permits'


exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, function(table){
      table.increments()
      table.integer('projects_id')
      table.foreign('projects_id').references('projects.id')
      table.integer('permits_id')
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
