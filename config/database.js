import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "1212", {
  host: "localhost",
  dialect: "postgres",
});

export { sequelize };
