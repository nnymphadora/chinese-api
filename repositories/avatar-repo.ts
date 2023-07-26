import e from "express";
import dbConnection from "../common/db-Connection";
import { ReturningStatementNotSupportedError } from "typeorm";

const getAllAvatars = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM avatar");
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getAvatarByID = async (id: number) => {
  try {
    const data = await dbConnection.query("SELECT * FROM avatar WHERE id = ?", [
      id,
    ]);
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default { getAllAvatars, getAvatarByID };
