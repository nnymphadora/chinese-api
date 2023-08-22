import express from "express";
import newsletterController from "../controllers/newsletter-controller";

const newsletterRouter = express.Router();

newsletterRouter
  .route("/")
  .get(newsletterController.getAllSubscribedEmails)
  .post(newsletterController.insertSubscribedEmail);

export default newsletterRouter;
