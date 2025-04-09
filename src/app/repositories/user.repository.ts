import Role from "../../database/models/RoleModel";
import User from "../../database/models/UserModel";
export const findAllUsers = async () => {
  try {
    return await User.findAll({
      include: [
        {
          model: Role,
          attributes: ["role_name"],
        },
      ],
    });
  } catch (error) {
    throw new Error("Database operation failed");
  }
};
