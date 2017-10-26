exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', function (table) {
    table.integer('user_id').unsigned().references('user.id');
    table.integer('slot_id').unsigned().references('event_slots.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes');
};