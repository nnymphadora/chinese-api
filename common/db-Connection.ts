import { DataSource } from "typeorm";
//koneckija sa bazom, pravimo DataSource objekat

const dbConnection = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3006,
  username: "root",
  password: "hellohi24",
  database: "chinese-practice",
});

export default dbConnection;
