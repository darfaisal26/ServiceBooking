import User from "../../database/models/UserModel";
export const findAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error("Database operation failed");
  }
};
