import express from "express";
import cors from "cors";
import path from "path";
import dbConnection from "./common/db-Connection";

//import ruta
import userRouter from "./routing/user-routing";
import levelRouter from "./routing/level-routing";
import lessonRouter from "./routing/lesson-routing";
import lessonStatusValueRouter from "./routing/lesson-status-value-routing";
import avatarRouter from "./routing/avatar-routing";

const app = express();
app.use(express.json());

//routers
app.use(userRouter);
app.use("/levels", levelRouter);
app.use("/lessons", lessonRouter);
app.use("/ls-values", lessonStatusValueRouter);
app.use("avatars", avatarRouter);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

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
