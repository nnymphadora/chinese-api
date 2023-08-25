import { expressjwt } from "express-jwt";

const secretKey = process.env.JWT_SECRET as string;

const authMiddleware = expressjwt({
  secret: secretKey,
  algorithms: ["HS256"],
  requestProperty: "userData",
});

export default authMiddleware;
