import express from "express";
import newsletterController from "../controllers/newsletter-controller";
import authMiddleware from "../middlewares/auth-middleware";

const newsletterRouter = express.Router();

newsletterRouter
  .route("/")
  .get(authMiddleware, newsletterController.getAllSubscribedEmails)
  .post(newsletterController.insertSubscribedEmail);

export default newsletterRouter;
