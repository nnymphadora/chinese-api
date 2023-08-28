import multer, { StorageEngine } from "multer";
import express, { response } from "express";
import { Request, Response } from "express";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "..", "public", "uploaded-avatars"));
  },

  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileUploadRouter = express.Router();

let fileUpload = multer({ storage });

fileUploadRouter.post(
  "/upload",
  fileUpload.single("img"),
  (req: Request, res: Response) => {
    if (!req.file) {
      res.send({ status: -1, msg: "No file uploaded" });
    } else {
      res.send({
        status: 0,
        msg: "File uploaded",
        filename: req.file.filename,
      });
    }
  }
);

export default fileUploadRouter;
