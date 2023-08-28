import dbConnection from "../common/db-Connection";

const getAllUsernames = async () => {
  try {
    const result = await dbConnection.query("SELECT username FROM user");
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const register = async (user: any) => {
  try {
    console.log(user);

    const result = await dbConnection.query(
      `INSERT INTO user(username, email, hashed_password, avatar_path, is_admin) 
                                                VALUES (?, ?, ?, ?, 0)`,
      [user.username, user.email, user.hashedPassword, user.avatarPath]
    );
    return result;
  } catch (e: any) {
    console.log(e);

    return { success: false, msg: e.message };
  }
};

const login = async (user: any) => {
  try {
    const result = await dbConnection.query(
      `SELECT * FROM user WHERE username = ? AND hashed_password = ?`,
      [user.username, user.hashedPassword]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default { register, login, getAllUsernames };
