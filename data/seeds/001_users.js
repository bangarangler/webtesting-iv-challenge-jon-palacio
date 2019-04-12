exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("users").insert([
    { username: "jon", password: "qwerty" },
    { username: "kat", password: "pass" },
    { username: "matt", password: "matt" }
  ]);
};
