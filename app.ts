import express from "express";
import cors from "cors";

//db connection
import dbConnection from "./common/db-connection";

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  //izvrsava se kad se server pokrene
  console.log("Server is listening at port 3000");
});

dbConnection
  .initialize()
  .then(() => {
    console.log("Connected to Db!");
  })
  .catch((err: any) => {
    console.log(err);
  });
