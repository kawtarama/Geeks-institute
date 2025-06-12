module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'your_password',
      database: 'blogdb'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
