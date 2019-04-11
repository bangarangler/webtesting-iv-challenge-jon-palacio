exports.up = function(knex, Promise) {
  return knex.schema.createTable("members", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();
    tbl.string("description", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("members");
};
