import dbConnection from "../common/db-Connection";

const insertSubscribedEmail = async (email: any) => {
  try {
    const data = dbConnection.query(
      "INSERT INTO subscribed_to_newsletter(email, date_subscribed) VALUES(?, now())",
      [email.email]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getAllSubscribedEmails = async () => {
  try {
    const data = dbConnection.query("SELECT * FROM subscribed_to_newsletter");
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default {
  insertSubscribedEmail,
  getAllSubscribedEmails,
};
