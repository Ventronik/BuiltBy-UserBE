const TABLE_NAME = 'users_projects'


exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, function(table){
      table.increments()
      table.integer('projects_id')
      table.foreign('projects_id').references('projects.id')
      table.integer('users_id')
      table.foreign('users_id').references('users.id')
      table.string('role')
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
