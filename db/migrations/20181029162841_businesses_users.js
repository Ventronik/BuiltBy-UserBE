const TABLE_NAME = 'businesses_users'


exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, function(table){
      table.increments()
      table.integer('businesses_id')
      table.foreign('businesses_id').references('businesses.id')
      table.integer('users_id')
      table.foreign('users_id').references('users.id')
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
