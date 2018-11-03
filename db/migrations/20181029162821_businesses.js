const TABLE_NAME = 'businesses'


exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, function(table){
      table.increments()
      table.string('businessname').notNullable()
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
