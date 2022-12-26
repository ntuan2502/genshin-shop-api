module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_TYPE"),
    connection: {
      host: env("PGHOST"),
      port: env.int("PGPORT"),
      database: env("PGNAME"),
      user: env("PGUSERNAME"),
      password: env("PGPASSWORD"),
      ssl: env.bool("DATABASE_SSL"),
    },
  },
});
