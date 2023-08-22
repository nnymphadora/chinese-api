import newsletterRepo from "../repositories/newsletter-repo";

const insertSubscribedEmail = async (email: any) => {
  const result = await newsletterRepo.insertSubscribedEmail(email);
  return result;
};

const getAllSubscribedEmails = async () => {
  const data = await newsletterRepo.getAllSubscribedEmails();
  const result = [];

  data.forEach((email: any) => {
    result.push({
      email: email.email,
      dateSubscribed: email.date_subscribed,
    });
  });
};

export default {
  insertSubscribedEmail,
  getAllSubscribedEmails,
};
