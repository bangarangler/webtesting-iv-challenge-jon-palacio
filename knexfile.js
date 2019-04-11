//const localPg = {
//host: 'localhost',
//database: 'hobbits',
//user: 'student',
//password: 'hired',
//}
//const productionDbConnection = process.env.DATABASE_URL || localPg;
module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/Members.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

  //staging: {
  //client: "postgresql",
  //connection: {
  //database: "my_db",
  //user: "username",
  //password: "password"
  //},
  //pool: {
  //min: 2,
  //max: 10
  //},
  //migrations: {
  //tableName: "knex_migrations"
  //}
  //},

  //production: {
  //client: "pg",
  //connection: productionDbConnection,
  //migrations: {
  //directory: "./data/migrations"
  //},
  //seeds: {
  //directory: "./data/seeds"
  //},
  //pool: {
  //min: 2,
  //max: 10
  //},
  //migrations: {
  //tableName: "knex_migrations"
  //}
  //}
};
