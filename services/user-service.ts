import userRepository from "../repositories/user-repo";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET as string;

const register = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.register(user);
  console.log(secretKey);

  if (result.affectedRows > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: false,
      },
      secretKey
    );

    return { success: true, token };
  } else {
    return { success: false, result };
  }
};

const login = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.login(user);
  console.log(secretKey);

  if (result && result.length > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: result[0].is_admin == 1,
      },
      secretKey
    );

    return { success: true, token };
  } else {
    return { success: false, result };
  }
};

export default { register, login };
