import express from "express";
import cors from "cors";
import path from "path";
import dbConnection from "./common/db-Connection";

require("dotenv").config();

//import rutera
import userRouter from "./routing/user-routing";
import levelRouter from "./routing/level-routing";
import lessonRouter from "./routing/lesson-routing";
import levelCefrEquivRouter from "./routing/level-cefr-equiv-routing";
import levelDifficultyRouter from "./routing/level-difficulty-routing";
import newWordRouter from "./routing/new-word-routing";
import newsletterRouter from "./routing/newsletter-routing";
import fileUploadRouter from "./common/file-upload";

const app = express();
app.use(cors());
app.use(express.json());

//routers
app.use(userRouter);
app.use("/levels", levelRouter);
app.use("/lessons", lessonRouter);

app.use("/level-cefr-equivs", levelCefrEquivRouter);
app.use("/level-difficulty", levelDifficultyRouter);
app.use("/new-words", newWordRouter);
app.use("/newsletter", newsletterRouter);

app.use(express.static(path.join(__dirname, "public/avatars")));
app.use(express.static(path.join(__dirname, "public/uploaded-avatars")));

app.use(fileUploadRouter);

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

//generate secret key
// import crypto from "crypto";

// const generateSecretKey = () => {
//   return crypto.randomBytes(64).toString("hex");
// };

// const secretKey = generateSecretKey();
// console.log(secretKey);
