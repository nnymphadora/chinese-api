import userRepository from "../repositories/user-repo";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const register = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.register(user);

  if (result.affectedRows > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: false,
      },
      "SECRET"
    );

    return { success: true, token };
  } else {
    return { success: false, result };
  }
};

const login = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.login(user);

  if (result && result.length > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: result[0].is_admin == 1,
      },
      "SECRET"
    );

    return { success: true, token };
  } else {
    return { success: false, result };
  }
};

export default { register, login };
