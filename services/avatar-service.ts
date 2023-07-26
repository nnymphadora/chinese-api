import avatarRepo from "../repositories/avatar-repo";

const getAllAvatars = async () => {
  const data = await avatarRepo.getAllAvatars();

  const result: any = [];

  data.forEach((avatar: any) => {
    result.push({
      id: avatar.id,
      name: avatar.name,
      avatarPath: avatar.avatar_path,
    });
  });
  return result;
};

const getAvatarByID = async (id: number) => {
  const data = await avatarRepo.getAvatarByID(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      name: data[0].name,
      avatarPath: data[0].avatar_path,
    };
  }
};

export default {
  getAllAvatars,
  getAvatarByID,
};
