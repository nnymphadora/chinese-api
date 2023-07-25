import express from "express";
import cors from "cors";

//db connection
import dbConnection from "./common/db-Connection";

//import ruta
import userRouter from "./routing/user-routing";
import levelRouter from "./routing/level-routing";

const app = express();

app.use(userRouter);
app.use("/levels", levelRouter);

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
