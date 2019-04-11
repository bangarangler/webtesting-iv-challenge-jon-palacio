exports.seed = function(knex, Promise) {
  return knex("members").insert([
    { name: "jon", description: `jon, a student at lambda` },
    { name: "kat", description: "jon's wife" },
    { name: "matt", description: `a fake friend` }
  ]);
};
