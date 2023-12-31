import userRepository from "../repositories/user-repo";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET as string;

const getAllUsernames = async () => {
  const data = await userRepository.getAllUsernames();
  const result: any = [];
  data.forEach((el: any) => result.push(el.username));
  return result;
};

const getUserByUsername = async (username: string) => {
  const data = await userRepository.getUserByUsername(username);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      username: data[0].username,
      isAdmin: data[0].is_admin,
      email: data[0].email,
      avatarPath: data[0].avatar_path,
    };
  }
};

const getUserById = async (id: number) => {
  const data = await userRepository.getUserById(id);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      username: data[0].username,
      isAdmin: data[0].is_admin,
      email: data[0].email,
      avatarPath: data[0].avatar_path,
    };
  }
};

const register = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.register(user);

  if (result.affectedRows > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: false,
      },
      secretKey
    );

    return { success: true, token };
  }
  return { success: false, result };
};

const login = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.login(user.username, user.hashedPassword);

  if (result && result.length > 0) {
    const token = jwt.sign(
      {
        username: result[0].username,
        isAdmin: result[0].is_admin == 1,
      },
      secretKey
    );

    return { success: true, token };
  }
  return { success: false, result };
};

const updateUserInfo = async (user: any) => {
  const result = await userRepository.updateUserInfo(user.id, user);

  if (result.affectedRows > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: user.is_admin == 1,
      },
      secretKey
    );

    return { success: true, token };
  }
  return { success: false, result };
};

const updateUserPassword = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.updateUserPassword(user);
  if (result.affectedRows > 0) return { success: true, result };
  return { success: false, result };
};

const confirmPassword = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  const result = await userRepository.login(user.username, user.hashedPassword);
  if (result && result.length > 0) return { success: true, result };
  return { success: false, result };
};

export default {
  register,
  login,
  getAllUsernames,
  getUserByUsername,
  updateUserInfo,
  getUserById,
  updateUserPassword,
  confirmPassword,
};
