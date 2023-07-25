import dbConnection from "../common/db-Connection";

const register = async (user: any) => {
  try {
    const result = await dbConnection.query(
      `INSERT INTO user(username, email, hashed_password,avatar_id, is_admin) 
                                                VALUES (?, ?, ?, ?, 0)`,
      [user.username, user.email, user.hashedPassword, user.avatarId]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const login = async (user: any) => {
  try {
    const result = await dbConnection.query(
      `SELECT * FROM users WHERE username = ? AND hashed_password = ?`,
      [user.username, user.hashedPassword]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default { register, login };