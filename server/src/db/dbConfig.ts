import { Sequelize } from "sequelize";
import config from "../config/config.js";

const development = config.development;

const database: string | any = development.database;
const username: string | any = development.username;
const password: string = development.password ? development.password : "";

const HOST: string | undefined =
  process.env.NODE_ENV === "production" ? process.env.DATABASE_HOST : undefined;

const sequelize = new Sequelize(database, username, password, {
  host: HOST,
  dialect: "postgres",
});

export default sequelize;
