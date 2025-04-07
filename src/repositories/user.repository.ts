// src/repositories/user.repository.ts
import { query, User } from "../utils/db";

export const getUsers = async (): Promise<User[]> => {
  return query<User[]>("SELECT * FROM users");
};

export const getUserById = async (id: number): Promise<User | null> => {
  const [user] = await query<User[]>("SELECT * FROM users WHERE id = ?", [id]);
  return user || null;
};
