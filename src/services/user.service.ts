// src/services/user.service.ts
import { getUsers, getUserById } from "../repositories/user.repository";
import { User } from "../utils/db";

// Add business logic here
export const getAllUsers = async (): Promise<User[]> => {
  try {
    return await getUsers();
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getSingleUser = async (userId: number): Promise<User> => {
  const user = await getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
