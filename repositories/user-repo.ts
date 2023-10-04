import dbConnection from "../common/db-Connection";

const getAllUsernames = async () => {
  try {
    const result = await dbConnection.query("SELECT username FROM user");
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getUserByUsername = async (username: string) => {
  try {
    const result = await dbConnection.query(
      "SELECT * FROM user WHERE username = ?",
      [username]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getUserById = async (id: number) => {
  try {
    const result = await dbConnection.query("SELECT * FROM user WHERE id = ?", [
      id,
    ]);
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const register = async (user: any) => {
  try {
    const result = await dbConnection.query(
      `INSERT INTO user(username, email, hashed_password, avatar_path, is_admin) 
                                                VALUES (?, ?, ?, ?, 0)`,
      [user.username, user.email, user.hashedPassword, user.avatarPath]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const login = async (username: string, hashedPassword: string) => {
  try {
    const result = await dbConnection.query(
      `SELECT * FROM user WHERE username = ? AND hashed_password = ?`,
      [username, hashedPassword]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const updateUserInfo = async (id: number, user: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE user SET username = ?, email = ?, avatar_path = ? WHERE id = ?",
      [user.username, user.email, user.avatarPath, id]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const updateUserPassword = async (user: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE user SET hashed_password = ? WHERE id = ?",
      [user.hashedPassword, user.id]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default {
  register,
  login,
  getAllUsernames,
  getUserByUsername,
  updateUserInfo,
  getUserById,
  updateUserPassword,
};
