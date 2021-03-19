require("dotenv/config"); // load everything from `.env` file into the `process.env` variable

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

module.exports = [
  {
    name: "default",
    type: "mysql",
    host: DB_HOST || "localhost",
    port: DB_PORT || 3306,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    entities: ["src/entities/*.ts"],
    subscribers: ["src/subscribers/*.ts"],
    migrations: ["src/migrations/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migrations",
      subscribersDir: "src/subscribers",
    },
  },
];
